[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxGroupItem

# Class: TaxGroupItem

Describes the parameters that constitute a param associated to a tax group

**`Generated`**

from message Scailo.TaxGroupItem

## Hierarchy

- `Message`\<[`TaxGroupItem`](TaxGroupItem.md)\>

  ↳ **`TaxGroupItem`**

## Table of contents

### Constructors

- [constructor](TaxGroupItem.md#constructor)

### Properties

- [approvalMetadata](TaxGroupItem.md#approvalmetadata)
- [description](TaxGroupItem.md#description)
- [entityUuid](TaxGroupItem.md#entityuuid)
- [metadata](TaxGroupItem.md#metadata)
- [needApproval](TaxGroupItem.md#needapproval)
- [taxGroupId](TaxGroupItem.md#taxgroupid)
- [taxParamId](TaxGroupItem.md#taxparamid)
- [userComment](TaxGroupItem.md#usercomment)
- [fields](TaxGroupItem.md#fields)
- [runtime](TaxGroupItem.md#runtime)
- [typeName](TaxGroupItem.md#typename)

### Methods

- [clone](TaxGroupItem.md#clone)
- [equals](TaxGroupItem.md#equals)
- [fromBinary](TaxGroupItem.md#frombinary)
- [fromJson](TaxGroupItem.md#fromjson)
- [fromJsonString](TaxGroupItem.md#fromjsonstring)
- [getType](TaxGroupItem.md#gettype)
- [toBinary](TaxGroupItem.md#tobinary)
- [toJSON](TaxGroupItem.md#tojson)
- [toJson](TaxGroupItem.md#tojson-1)
- [toJsonString](TaxGroupItem.md#tojsonstring)
- [equals](TaxGroupItem.md#equals-1)
- [fromBinary](TaxGroupItem.md#frombinary-1)
- [fromJson](TaxGroupItem.md#fromjson-1)
- [fromJsonString](TaxGroupItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxGroupItem**(`data?`): [`TaxGroupItem`](TaxGroupItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxGroupItem`](TaxGroupItem.md)\> |

#### Returns

[`TaxGroupItem`](TaxGroupItem.md)

#### Overrides

Message\&lt;TaxGroupItem\&gt;.constructor

#### Defined in

[src/tax_groups.scailo_pb.ts:1587](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_groups.scailo_pb.ts#L1587)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/tax_groups.scailo_pb.ts:1545](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_groups.scailo_pb.ts#L1545)

___

### description

• **description**: `string` = `""`

An optional description

**`Generated`**

from field: string description = 40;

#### Defined in

[src/tax_groups.scailo_pb.ts:1585](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_groups.scailo_pb.ts#L1585)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/tax_groups.scailo_pb.ts:1529](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_groups.scailo_pb.ts#L1529)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/tax_groups.scailo_pb.ts:1537](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_groups.scailo_pb.ts#L1537)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

A boolean flag indicating whether this specific record requires further administrative approval.

**`Example`**

```ts
false
```

**`Format`**

Boolean true or false.

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/tax_groups.scailo_pb.ts:1557](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_groups.scailo_pb.ts#L1557)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 10;

#### Defined in

[src/tax_groups.scailo_pb.ts:1571](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_groups.scailo_pb.ts#L1571)

___

### taxParamId

• **taxParamId**: `bigint` = `protoInt64.zero`

The ID of the tax param that is a part of the tax group

**`Generated`**

from field: uint64 tax_param_id = 11;

#### Defined in

[src/tax_groups.scailo_pb.ts:1578](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_groups.scailo_pb.ts#L1578)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/tax_groups.scailo_pb.ts:1564](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_groups.scailo_pb.ts#L1564)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/tax_groups.scailo_pb.ts:1594](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_groups.scailo_pb.ts#L1594)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/tax_groups.scailo_pb.ts:1592](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_groups.scailo_pb.ts#L1592)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxGroupItem"``

#### Defined in

[src/tax_groups.scailo_pb.ts:1593](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_groups.scailo_pb.ts#L1593)

## Methods

### clone

▸ **clone**(): [`TaxGroupItem`](TaxGroupItem.md)

Create a deep copy.

#### Returns

[`TaxGroupItem`](TaxGroupItem.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`TaxGroupItem`](TaxGroupItem.md) \| `PlainMessage`\<[`TaxGroupItem`](TaxGroupItem.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`TaxGroupItem`](TaxGroupItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxGroupItem`](TaxGroupItem.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`TaxGroupItem`](TaxGroupItem.md) \| `PlainMessage`\<[`TaxGroupItem`](TaxGroupItem.md)\> |
| `b` | `undefined` \| [`TaxGroupItem`](TaxGroupItem.md) \| `PlainMessage`\<[`TaxGroupItem`](TaxGroupItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/tax_groups.scailo_pb.ts:1617](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_groups.scailo_pb.ts#L1617)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxGroupItem`](TaxGroupItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxGroupItem`](TaxGroupItem.md)

#### Defined in

[src/tax_groups.scailo_pb.ts:1605](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_groups.scailo_pb.ts#L1605)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxGroupItem`](TaxGroupItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupItem`](TaxGroupItem.md)

#### Defined in

[src/tax_groups.scailo_pb.ts:1609](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_groups.scailo_pb.ts#L1609)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxGroupItem`](TaxGroupItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupItem`](TaxGroupItem.md)

#### Defined in

[src/tax_groups.scailo_pb.ts:1613](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/tax_groups.scailo_pb.ts#L1613)
