[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssetIndentItemProspectiveInfoRequest

# Class: AssetIndentItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective asset indent item

**`Generated`**

from message Scailo.AssetIndentItemProspectiveInfoRequest

## Hierarchy

- `Message`\<[`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md)\>

  ↳ **`AssetIndentItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](AssetIndentItemProspectiveInfoRequest.md#constructor)

### Properties

- [assetIndentId](AssetIndentItemProspectiveInfoRequest.md#assetindentid)
- [familyId](AssetIndentItemProspectiveInfoRequest.md#familyid)
- [fields](AssetIndentItemProspectiveInfoRequest.md#fields)
- [runtime](AssetIndentItemProspectiveInfoRequest.md#runtime)
- [typeName](AssetIndentItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](AssetIndentItemProspectiveInfoRequest.md#clone)
- [equals](AssetIndentItemProspectiveInfoRequest.md#equals)
- [fromBinary](AssetIndentItemProspectiveInfoRequest.md#frombinary)
- [fromJson](AssetIndentItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](AssetIndentItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](AssetIndentItemProspectiveInfoRequest.md#gettype)
- [toBinary](AssetIndentItemProspectiveInfoRequest.md#tobinary)
- [toJSON](AssetIndentItemProspectiveInfoRequest.md#tojson)
- [toJson](AssetIndentItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](AssetIndentItemProspectiveInfoRequest.md#tojsonstring)
- [equals](AssetIndentItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](AssetIndentItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](AssetIndentItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](AssetIndentItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentItemProspectiveInfoRequest**(`data?`): [`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md)\> |

#### Returns

[`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md)

#### Overrides

Message\&lt;AssetIndentItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

src/asset_indents.scailo_pb.ts:1143

## Properties

### assetIndentId

• **assetIndentId**: `bigint` = `protoInt64.zero`

Stores the asset indent ID

**`Generated`**

from field: uint64 asset_indent_id = 10;

#### Defined in

src/asset_indents.scailo_pb.ts:1134

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/asset_indents.scailo_pb.ts:1141

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/asset_indents.scailo_pb.ts:1150

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/asset_indents.scailo_pb.ts:1148

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssetIndentItemProspectiveInfoRequest"``

#### Defined in

src/asset_indents.scailo_pb.ts:1149

## Methods

### clone

▸ **clone**(): [`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md) \| `PlainMessage`\<[`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/asset_indents.scailo_pb.ts:1167

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md)

#### Defined in

src/asset_indents.scailo_pb.ts:1155

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md)

#### Defined in

src/asset_indents.scailo_pb.ts:1159

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssetIndentItemProspectiveInfoRequest`](AssetIndentItemProspectiveInfoRequest.md)

#### Defined in

src/asset_indents.scailo_pb.ts:1163
