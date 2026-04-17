[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentItem

# Class: ReplaceableIndentItem

Describes the parameters that constitute an item associated to a replaceable indent

**`Generated`**

from message Scailo.ReplaceableIndentItem

## Hierarchy

- `Message`\<[`ReplaceableIndentItem`](ReplaceableIndentItem.md)\>

  ↳ **`ReplaceableIndentItem`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentItem.md#constructor)

### Properties

- [approvalMetadata](ReplaceableIndentItem.md#approvalmetadata)
- [entityUuid](ReplaceableIndentItem.md#entityuuid)
- [familyId](ReplaceableIndentItem.md#familyid)
- [internalQuantity](ReplaceableIndentItem.md#internalquantity)
- [metadata](ReplaceableIndentItem.md#metadata)
- [needApproval](ReplaceableIndentItem.md#needapproval)
- [replaceableIndentId](ReplaceableIndentItem.md#replaceableindentid)
- [userComment](ReplaceableIndentItem.md#usercomment)
- [fields](ReplaceableIndentItem.md#fields)
- [runtime](ReplaceableIndentItem.md#runtime)
- [typeName](ReplaceableIndentItem.md#typename)

### Methods

- [clone](ReplaceableIndentItem.md#clone)
- [equals](ReplaceableIndentItem.md#equals)
- [fromBinary](ReplaceableIndentItem.md#frombinary)
- [fromJson](ReplaceableIndentItem.md#fromjson)
- [fromJsonString](ReplaceableIndentItem.md#fromjsonstring)
- [getType](ReplaceableIndentItem.md#gettype)
- [toBinary](ReplaceableIndentItem.md#tobinary)
- [toJSON](ReplaceableIndentItem.md#tojson)
- [toJson](ReplaceableIndentItem.md#tojson-1)
- [toJsonString](ReplaceableIndentItem.md#tojsonstring)
- [equals](ReplaceableIndentItem.md#equals-1)
- [fromBinary](ReplaceableIndentItem.md#frombinary-1)
- [fromJson](ReplaceableIndentItem.md#fromjson-1)
- [fromJsonString](ReplaceableIndentItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentItem**(`data?`): [`ReplaceableIndentItem`](ReplaceableIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReplaceableIndentItem`](ReplaceableIndentItem.md)\> |

#### Returns

[`ReplaceableIndentItem`](ReplaceableIndentItem.md)

#### Overrides

Message\&lt;ReplaceableIndentItem\&gt;.constructor

#### Defined in

[src/replaceable_indents.scailo_pb.ts:906](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L906)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:868](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L868)

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

[src/replaceable_indents.scailo_pb.ts:852](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L852)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:897](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L897)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity required

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:904](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L904)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:860](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L860)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

The approval state of the record

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:876](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L876)

___

### replaceableIndentId

• **replaceableIndentId**: `bigint` = `protoInt64.zero`

Stores the replaceable indent ID

**`Generated`**

from field: uint64 replaceable_indent_id = 10;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:890](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L890)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:883](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L883)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:913](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L913)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:911](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L911)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndentItem"``

#### Defined in

[src/replaceable_indents.scailo_pb.ts:912](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L912)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentItem`](ReplaceableIndentItem.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentItem`](ReplaceableIndentItem.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentItem`](ReplaceableIndentItem.md) \| `PlainMessage`\<[`ReplaceableIndentItem`](ReplaceableIndentItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReplaceableIndentItem`](ReplaceableIndentItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReplaceableIndentItem`](ReplaceableIndentItem.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentItem`](ReplaceableIndentItem.md) \| `PlainMessage`\<[`ReplaceableIndentItem`](ReplaceableIndentItem.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentItem`](ReplaceableIndentItem.md) \| `PlainMessage`\<[`ReplaceableIndentItem`](ReplaceableIndentItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:936](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L936)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentItem`](ReplaceableIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentItem`](ReplaceableIndentItem.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:924](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L924)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentItem`](ReplaceableIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentItem`](ReplaceableIndentItem.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:928](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L928)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentItem`](ReplaceableIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentItem`](ReplaceableIndentItem.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:932](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L932)
