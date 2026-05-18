[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssetIndentItem

# Class: AssetIndentItem

Describes the parameters that constitute an item associated to a asset indent

**`Generated`**

from message Scailo.AssetIndentItem

## Hierarchy

- `Message`\<[`AssetIndentItem`](AssetIndentItem.md)\>

  ↳ **`AssetIndentItem`**

## Table of contents

### Constructors

- [constructor](AssetIndentItem.md#constructor)

### Properties

- [approvalMetadata](AssetIndentItem.md#approvalmetadata)
- [assetIndentId](AssetIndentItem.md#assetindentid)
- [entityUuid](AssetIndentItem.md#entityuuid)
- [familyId](AssetIndentItem.md#familyid)
- [metadata](AssetIndentItem.md#metadata)
- [needApproval](AssetIndentItem.md#needapproval)
- [quantity](AssetIndentItem.md#quantity)
- [userComment](AssetIndentItem.md#usercomment)
- [fields](AssetIndentItem.md#fields)
- [runtime](AssetIndentItem.md#runtime)
- [typeName](AssetIndentItem.md#typename)

### Methods

- [clone](AssetIndentItem.md#clone)
- [equals](AssetIndentItem.md#equals)
- [fromBinary](AssetIndentItem.md#frombinary)
- [fromJson](AssetIndentItem.md#fromjson)
- [fromJsonString](AssetIndentItem.md#fromjsonstring)
- [getType](AssetIndentItem.md#gettype)
- [toBinary](AssetIndentItem.md#tobinary)
- [toJSON](AssetIndentItem.md#tojson)
- [toJson](AssetIndentItem.md#tojson-1)
- [toJsonString](AssetIndentItem.md#tojsonstring)
- [equals](AssetIndentItem.md#equals-1)
- [fromBinary](AssetIndentItem.md#frombinary-1)
- [fromJson](AssetIndentItem.md#fromjson-1)
- [fromJsonString](AssetIndentItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentItem**(`data?`): [`AssetIndentItem`](AssetIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssetIndentItem`](AssetIndentItem.md)\> |

#### Returns

[`AssetIndentItem`](AssetIndentItem.md)

#### Overrides

Message\&lt;AssetIndentItem\&gt;.constructor

#### Defined in

[src/asset_indents.scailo_pb.ts:816](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L816)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/asset_indents.scailo_pb.ts:778](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L778)

___

### assetIndentId

• **assetIndentId**: `bigint` = `protoInt64.zero`

Stores the asset indent ID

**`Generated`**

from field: uint64 asset_indent_id = 10;

#### Defined in

[src/asset_indents.scailo_pb.ts:800](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L800)

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

[src/asset_indents.scailo_pb.ts:762](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L762)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/asset_indents.scailo_pb.ts:807](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L807)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/asset_indents.scailo_pb.ts:770](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L770)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

The approval state of the record

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/asset_indents.scailo_pb.ts:786](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L786)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity being manufactured

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

[src/asset_indents.scailo_pb.ts:814](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L814)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/asset_indents.scailo_pb.ts:793](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L793)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/asset_indents.scailo_pb.ts:823](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L823)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/asset_indents.scailo_pb.ts:821](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L821)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssetIndentItem"``

#### Defined in

[src/asset_indents.scailo_pb.ts:822](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L822)

## Methods

### clone

▸ **clone**(): [`AssetIndentItem`](AssetIndentItem.md)

Create a deep copy.

#### Returns

[`AssetIndentItem`](AssetIndentItem.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentItem`](AssetIndentItem.md) \| `PlainMessage`\<[`AssetIndentItem`](AssetIndentItem.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssetIndentItem`](AssetIndentItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssetIndentItem`](AssetIndentItem.md)\>

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
| `a` | `undefined` \| [`AssetIndentItem`](AssetIndentItem.md) \| `PlainMessage`\<[`AssetIndentItem`](AssetIndentItem.md)\> |
| `b` | `undefined` \| [`AssetIndentItem`](AssetIndentItem.md) \| `PlainMessage`\<[`AssetIndentItem`](AssetIndentItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/asset_indents.scailo_pb.ts:846](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L846)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentItem`](AssetIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentItem`](AssetIndentItem.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:834](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L834)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentItem`](AssetIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentItem`](AssetIndentItem.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:838](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L838)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentItem`](AssetIndentItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentItem`](AssetIndentItem.md)

#### Defined in

[src/asset_indents.scailo_pb.ts:842](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/asset_indents.scailo_pb.ts#L842)
