[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseIndentItemHistoryRequest

# Class: PurchaseIndentItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.PurchaseIndentItemHistoryRequest

## Hierarchy

- `Message`\<[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)\>

  ↳ **`PurchaseIndentItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](PurchaseIndentItemHistoryRequest.md#constructor)

### Properties

- [familyId](PurchaseIndentItemHistoryRequest.md#familyid)
- [purchaseIndentId](PurchaseIndentItemHistoryRequest.md#purchaseindentid)
- [fields](PurchaseIndentItemHistoryRequest.md#fields)
- [runtime](PurchaseIndentItemHistoryRequest.md#runtime)
- [typeName](PurchaseIndentItemHistoryRequest.md#typename)

### Methods

- [clone](PurchaseIndentItemHistoryRequest.md#clone)
- [equals](PurchaseIndentItemHistoryRequest.md#equals)
- [fromBinary](PurchaseIndentItemHistoryRequest.md#frombinary)
- [fromJson](PurchaseIndentItemHistoryRequest.md#fromjson)
- [fromJsonString](PurchaseIndentItemHistoryRequest.md#fromjsonstring)
- [getType](PurchaseIndentItemHistoryRequest.md#gettype)
- [toBinary](PurchaseIndentItemHistoryRequest.md#tobinary)
- [toJSON](PurchaseIndentItemHistoryRequest.md#tojson)
- [toJson](PurchaseIndentItemHistoryRequest.md#tojson-1)
- [toJsonString](PurchaseIndentItemHistoryRequest.md#tojsonstring)
- [equals](PurchaseIndentItemHistoryRequest.md#equals-1)
- [fromBinary](PurchaseIndentItemHistoryRequest.md#frombinary-1)
- [fromJson](PurchaseIndentItemHistoryRequest.md#fromjson-1)
- [fromJsonString](PurchaseIndentItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseIndentItemHistoryRequest**(`data?`): [`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)\> |

#### Returns

[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

#### Overrides

Message\&lt;PurchaseIndentItemHistoryRequest\&gt;.constructor

#### Defined in

src/purchases_indents.scailo_pb.ts:1063

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/purchases_indents.scailo_pb.ts:1061

___

### purchaseIndentId

• **purchaseIndentId**: `bigint` = `protoInt64.zero`

Stores the purchase indent ID

**`Generated`**

from field: uint64 purchase_indent_id = 10;

#### Defined in

src/purchases_indents.scailo_pb.ts:1054

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_indents.scailo_pb.ts:1070

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_indents.scailo_pb.ts:1068

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseIndentItemHistoryRequest"``

#### Defined in

src/purchases_indents.scailo_pb.ts:1069

## Methods

### clone

▸ **clone**(): [`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md) \| `PlainMessage`\<[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md) \| `PlainMessage`\<[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md) \| `PlainMessage`\<[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_indents.scailo_pb.ts:1087

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:1075

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:1079

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:1083
