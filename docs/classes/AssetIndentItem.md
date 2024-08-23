[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / AssetIndentItem

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

src/asset_indents.scailo_pb.ts:741

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/asset_indents.scailo_pb.ts:704

___

### assetIndentId

• **assetIndentId**: `bigint` = `protoInt64.zero`

Stores the asset indent ID

**`Generated`**

from field: uint64 asset_indent_id = 10;

#### Defined in

src/asset_indents.scailo_pb.ts:725

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/asset_indents.scailo_pb.ts:690

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/asset_indents.scailo_pb.ts:732

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this asset indent

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/asset_indents.scailo_pb.ts:697

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/asset_indents.scailo_pb.ts:711

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity being manufactured

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

src/asset_indents.scailo_pb.ts:739

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/asset_indents.scailo_pb.ts:718

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/asset_indents.scailo_pb.ts:748

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/asset_indents.scailo_pb.ts:746

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssetIndentItem"``

#### Defined in

src/asset_indents.scailo_pb.ts:747

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

src/asset_indents.scailo_pb.ts:771

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

src/asset_indents.scailo_pb.ts:759

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

src/asset_indents.scailo_pb.ts:763

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

src/asset_indents.scailo_pb.ts:767
