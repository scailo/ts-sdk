[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationFamilyItem

# Class: EquationFamilyItem

Describes the parameters that constitute an item associated to a equation family

**`Generated`**

from message Scailo.EquationFamilyItem

## Hierarchy

- `Message`\<[`EquationFamilyItem`](EquationFamilyItem.md)\>

  ↳ **`EquationFamilyItem`**

## Table of contents

### Constructors

- [constructor](EquationFamilyItem.md#constructor)

### Properties

- [approvalMetadata](EquationFamilyItem.md#approvalmetadata)
- [entityUuid](EquationFamilyItem.md#entityuuid)
- [equationId](EquationFamilyItem.md#equationid)
- [familyId](EquationFamilyItem.md#familyid)
- [metadata](EquationFamilyItem.md#metadata)
- [needApproval](EquationFamilyItem.md#needapproval)
- [quantity](EquationFamilyItem.md#quantity)
- [specifications](EquationFamilyItem.md#specifications)
- [unitPrice](EquationFamilyItem.md#unitprice)
- [userComment](EquationFamilyItem.md#usercomment)
- [fields](EquationFamilyItem.md#fields)
- [runtime](EquationFamilyItem.md#runtime)
- [typeName](EquationFamilyItem.md#typename)

### Methods

- [clone](EquationFamilyItem.md#clone)
- [equals](EquationFamilyItem.md#equals)
- [fromBinary](EquationFamilyItem.md#frombinary)
- [fromJson](EquationFamilyItem.md#fromjson)
- [fromJsonString](EquationFamilyItem.md#fromjsonstring)
- [getType](EquationFamilyItem.md#gettype)
- [toBinary](EquationFamilyItem.md#tobinary)
- [toJSON](EquationFamilyItem.md#tojson)
- [toJson](EquationFamilyItem.md#tojson-1)
- [toJsonString](EquationFamilyItem.md#tojsonstring)
- [equals](EquationFamilyItem.md#equals-1)
- [fromBinary](EquationFamilyItem.md#frombinary-1)
- [fromJson](EquationFamilyItem.md#fromjson-1)
- [fromJsonString](EquationFamilyItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationFamilyItem**(`data?`): [`EquationFamilyItem`](EquationFamilyItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationFamilyItem`](EquationFamilyItem.md)\> |

#### Returns

[`EquationFamilyItem`](EquationFamilyItem.md)

#### Overrides

Message\&lt;EquationFamilyItem\&gt;.constructor

#### Defined in

[src/equations_families.scailo_pb.ts:789](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L789)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/equations_families.scailo_pb.ts:737](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L737)

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

[src/equations_families.scailo_pb.ts:721](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L721)

___

### equationId

• **equationId**: `bigint` = `protoInt64.zero`

Stores the ID of the equation family

**`Generated`**

from field: uint64 equation_id = 10;

#### Defined in

[src/equations_families.scailo_pb.ts:759](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L759)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that the equation depends upon

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/equations_families.scailo_pb.ts:766](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L766)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/equations_families.scailo_pb.ts:729](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L729)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

The approval state of the record

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/equations_families.scailo_pb.ts:745](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L745)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of the associated family to be used as the multiplier

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

[src/equations_families.scailo_pb.ts:773](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L773)

___

### specifications

• **specifications**: `string` = `""`

The optional specifications

**`Generated`**

from field: string specifications = 14;

#### Defined in

[src/equations_families.scailo_pb.ts:787](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L787)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The optional unit price of this family

**`Generated`**

from field: uint64 unit_price = 13;

#### Defined in

[src/equations_families.scailo_pb.ts:780](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L780)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/equations_families.scailo_pb.ts:752](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L752)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_families.scailo_pb.ts:796](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L796)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_families.scailo_pb.ts:794](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L794)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationFamilyItem"``

#### Defined in

[src/equations_families.scailo_pb.ts:795](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L795)

## Methods

### clone

▸ **clone**(): [`EquationFamilyItem`](EquationFamilyItem.md)

Create a deep copy.

#### Returns

[`EquationFamilyItem`](EquationFamilyItem.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationFamilyItem`](EquationFamilyItem.md) \| `PlainMessage`\<[`EquationFamilyItem`](EquationFamilyItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationFamilyItem`](EquationFamilyItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationFamilyItem`](EquationFamilyItem.md)\>

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
| `a` | `undefined` \| [`EquationFamilyItem`](EquationFamilyItem.md) \| `PlainMessage`\<[`EquationFamilyItem`](EquationFamilyItem.md)\> |
| `b` | `undefined` \| [`EquationFamilyItem`](EquationFamilyItem.md) \| `PlainMessage`\<[`EquationFamilyItem`](EquationFamilyItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_families.scailo_pb.ts:821](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L821)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationFamilyItem`](EquationFamilyItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationFamilyItem`](EquationFamilyItem.md)

#### Defined in

[src/equations_families.scailo_pb.ts:809](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L809)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationFamilyItem`](EquationFamilyItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationFamilyItem`](EquationFamilyItem.md)

#### Defined in

[src/equations_families.scailo_pb.ts:813](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L813)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationFamilyItem`](EquationFamilyItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationFamilyItem`](EquationFamilyItem.md)

#### Defined in

[src/equations_families.scailo_pb.ts:817](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L817)
