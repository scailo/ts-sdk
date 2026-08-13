[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamilyUnitConversion

# Class: FamilyUnitConversion

Represents a mathematical conversion rule mapped to a specific family, facilitating transactions in multiple units of material.

**`Generated`**

from message Scailo.FamilyUnitConversion

## Hierarchy

- `Message`\<[`FamilyUnitConversion`](FamilyUnitConversion.md)\>

  ↳ **`FamilyUnitConversion`**

## Table of contents

### Constructors

- [constructor](FamilyUnitConversion.md#constructor)

### Properties

- [approvalMetadata](FamilyUnitConversion.md#approvalmetadata)
- [divisor](FamilyUnitConversion.md#divisor)
- [entityUuid](FamilyUnitConversion.md#entityuuid)
- [factor](FamilyUnitConversion.md#factor)
- [familyId](FamilyUnitConversion.md#familyid)
- [metadata](FamilyUnitConversion.md#metadata)
- [needApproval](FamilyUnitConversion.md#needapproval)
- [uomId](FamilyUnitConversion.md#uomid)
- [userComment](FamilyUnitConversion.md#usercomment)
- [fields](FamilyUnitConversion.md#fields)
- [runtime](FamilyUnitConversion.md#runtime)
- [typeName](FamilyUnitConversion.md#typename)

### Methods

- [clone](FamilyUnitConversion.md#clone)
- [equals](FamilyUnitConversion.md#equals)
- [fromBinary](FamilyUnitConversion.md#frombinary)
- [fromJson](FamilyUnitConversion.md#fromjson)
- [fromJsonString](FamilyUnitConversion.md#fromjsonstring)
- [getType](FamilyUnitConversion.md#gettype)
- [toBinary](FamilyUnitConversion.md#tobinary)
- [toJSON](FamilyUnitConversion.md#tojson)
- [toJson](FamilyUnitConversion.md#tojson-1)
- [toJsonString](FamilyUnitConversion.md#tojsonstring)
- [equals](FamilyUnitConversion.md#equals-1)
- [fromBinary](FamilyUnitConversion.md#frombinary-1)
- [fromJson](FamilyUnitConversion.md#fromjson-1)
- [fromJsonString](FamilyUnitConversion.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamilyUnitConversion**(`data?`): [`FamilyUnitConversion`](FamilyUnitConversion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamilyUnitConversion`](FamilyUnitConversion.md)\> |

#### Returns

[`FamilyUnitConversion`](FamilyUnitConversion.md)

#### Overrides

Message\&lt;FamilyUnitConversion\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:3770](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L3770)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/families.scailo_pb.ts:3706](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L3706)

___

### divisor

• **divisor**: `bigint` = `protoInt64.zero`

**`Description`**

The mathematical division factor for the conversion.

**`Example`**

```ts
1
```

**`Generated`**

from field: uint64 divisor = 13;

#### Defined in

[src/families.scailo_pb.ts:3768](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L3768)

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

[src/families.scailo_pb.ts:3690](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L3690)

___

### factor

• **factor**: `bigint` = `protoInt64.zero`

**`Description`**

The mathematical multiplication factor for the conversion.

**`Example`**

```ts
10
```

**`Generated`**

from field: uint64 factor = 12;

#### Defined in

[src/families.scailo_pb.ts:3758](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L3758)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the associated family.

**`Example`**

```ts
582
```

**`Generated`**

from field: uint64 family_id = 10;

#### Defined in

[src/families.scailo_pb.ts:3738](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L3738)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/families.scailo_pb.ts:3698](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L3698)

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

[src/families.scailo_pb.ts:3718](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L3718)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the alternate unit of material (UOM).

**`Example`**

```ts
12
```

**`Generated`**

from field: uint64 uom_id = 11;

#### Defined in

[src/families.scailo_pb.ts:3748](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L3748)

___

### userComment

• **userComment**: `string` = `""`

**`Description`**

Audit log comment or justification captured during the last modification or transactional operation.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/families.scailo_pb.ts:3728](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L3728)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:3777](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L3777)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:3775](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L3775)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamilyUnitConversion"``

#### Defined in

[src/families.scailo_pb.ts:3776](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L3776)

## Methods

### clone

▸ **clone**(): [`FamilyUnitConversion`](FamilyUnitConversion.md)

Create a deep copy.

#### Returns

[`FamilyUnitConversion`](FamilyUnitConversion.md)

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
| `other` | `undefined` \| ``null`` \| [`FamilyUnitConversion`](FamilyUnitConversion.md) \| `PlainMessage`\<[`FamilyUnitConversion`](FamilyUnitConversion.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamilyUnitConversion`](FamilyUnitConversion.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamilyUnitConversion`](FamilyUnitConversion.md)\>

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
| `a` | `undefined` \| [`FamilyUnitConversion`](FamilyUnitConversion.md) \| `PlainMessage`\<[`FamilyUnitConversion`](FamilyUnitConversion.md)\> |
| `b` | `undefined` \| [`FamilyUnitConversion`](FamilyUnitConversion.md) \| `PlainMessage`\<[`FamilyUnitConversion`](FamilyUnitConversion.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:3801](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L3801)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamilyUnitConversion`](FamilyUnitConversion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamilyUnitConversion`](FamilyUnitConversion.md)

#### Defined in

[src/families.scailo_pb.ts:3789](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L3789)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamilyUnitConversion`](FamilyUnitConversion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyUnitConversion`](FamilyUnitConversion.md)

#### Defined in

[src/families.scailo_pb.ts:3793](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L3793)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamilyUnitConversion`](FamilyUnitConversion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyUnitConversion`](FamilyUnitConversion.md)

#### Defined in

[src/families.scailo_pb.ts:3797](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L3797)
