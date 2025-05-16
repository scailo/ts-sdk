[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockReturnsServiceItemUpdateRequest

# Class: StockReturnsServiceItemUpdateRequest

Describes the parameters required to update an item in a stock return

**`Generated`**

from message Scailo.StockReturnsServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md)\>

  ↳ **`StockReturnsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](StockReturnsServiceItemUpdateRequest.md#constructor)

### Properties

- [id](StockReturnsServiceItemUpdateRequest.md#id)
- [internalQuantity](StockReturnsServiceItemUpdateRequest.md#internalquantity)
- [itemHash](StockReturnsServiceItemUpdateRequest.md#itemhash)
- [remainingDimensions](StockReturnsServiceItemUpdateRequest.md#remainingdimensions)
- [userComment](StockReturnsServiceItemUpdateRequest.md#usercomment)
- [fields](StockReturnsServiceItemUpdateRequest.md#fields)
- [runtime](StockReturnsServiceItemUpdateRequest.md#runtime)
- [typeName](StockReturnsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](StockReturnsServiceItemUpdateRequest.md#clone)
- [equals](StockReturnsServiceItemUpdateRequest.md#equals)
- [fromBinary](StockReturnsServiceItemUpdateRequest.md#frombinary)
- [fromJson](StockReturnsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](StockReturnsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](StockReturnsServiceItemUpdateRequest.md#gettype)
- [toBinary](StockReturnsServiceItemUpdateRequest.md#tobinary)
- [toJSON](StockReturnsServiceItemUpdateRequest.md#tojson)
- [toJson](StockReturnsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](StockReturnsServiceItemUpdateRequest.md#tojsonstring)
- [equals](StockReturnsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](StockReturnsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](StockReturnsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](StockReturnsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockReturnsServiceItemUpdateRequest**(`data?`): [`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md)\> |

#### Returns

[`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;StockReturnsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

src/stock_returns.scailo_pb.ts:681

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/stock_returns.scailo_pb.ts:658

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/stock_returns.scailo_pb.ts:665

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 13;

#### Defined in

src/stock_returns.scailo_pb.ts:672

___

### remainingDimensions

• **remainingDimensions**: `string` = `""`

The remaining dimensions of the item (if applicable)

**`Generated`**

from field: string remaining_dimensions = 14;

#### Defined in

src/stock_returns.scailo_pb.ts:679

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/stock_returns.scailo_pb.ts:651

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_returns.scailo_pb.ts:688

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_returns.scailo_pb.ts:686

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockReturnsServiceItemUpdateRequest"``

#### Defined in

src/stock_returns.scailo_pb.ts:687

## Methods

### clone

▸ **clone**(): [`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_returns.scailo_pb.ts:708

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md)

#### Defined in

src/stock_returns.scailo_pb.ts:696

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md)

#### Defined in

src/stock_returns.scailo_pb.ts:700

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceItemUpdateRequest`](StockReturnsServiceItemUpdateRequest.md)

#### Defined in

src/stock_returns.scailo_pb.ts:704
