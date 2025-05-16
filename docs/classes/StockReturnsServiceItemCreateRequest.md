[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockReturnsServiceItemCreateRequest

# Class: StockReturnsServiceItemCreateRequest

Describes the parameters required to add an item to a stock return

**`Generated`**

from message Scailo.StockReturnsServiceItemCreateRequest

## Hierarchy

- `Message`\<[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)\>

  ↳ **`StockReturnsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](StockReturnsServiceItemCreateRequest.md#constructor)

### Properties

- [familyId](StockReturnsServiceItemCreateRequest.md#familyid)
- [internalQuantity](StockReturnsServiceItemCreateRequest.md#internalquantity)
- [itemHash](StockReturnsServiceItemCreateRequest.md#itemhash)
- [remainingDimensions](StockReturnsServiceItemCreateRequest.md#remainingdimensions)
- [stockReturnId](StockReturnsServiceItemCreateRequest.md#stockreturnid)
- [userComment](StockReturnsServiceItemCreateRequest.md#usercomment)
- [fields](StockReturnsServiceItemCreateRequest.md#fields)
- [runtime](StockReturnsServiceItemCreateRequest.md#runtime)
- [typeName](StockReturnsServiceItemCreateRequest.md#typename)

### Methods

- [clone](StockReturnsServiceItemCreateRequest.md#clone)
- [equals](StockReturnsServiceItemCreateRequest.md#equals)
- [fromBinary](StockReturnsServiceItemCreateRequest.md#frombinary)
- [fromJson](StockReturnsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](StockReturnsServiceItemCreateRequest.md#fromjsonstring)
- [getType](StockReturnsServiceItemCreateRequest.md#gettype)
- [toBinary](StockReturnsServiceItemCreateRequest.md#tobinary)
- [toJSON](StockReturnsServiceItemCreateRequest.md#tojson)
- [toJson](StockReturnsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](StockReturnsServiceItemCreateRequest.md#tojsonstring)
- [equals](StockReturnsServiceItemCreateRequest.md#equals-1)
- [fromBinary](StockReturnsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](StockReturnsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](StockReturnsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockReturnsServiceItemCreateRequest**(`data?`): [`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)\> |

#### Returns

[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

#### Overrides

Message\&lt;StockReturnsServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/stock_returns.scailo_pb.ts:606

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/stock_returns.scailo_pb.ts:583

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/stock_returns.scailo_pb.ts:590

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 13;

#### Defined in

src/stock_returns.scailo_pb.ts:597

___

### remainingDimensions

• **remainingDimensions**: `string` = `""`

The remaining dimensions of the item (if applicable)

**`Generated`**

from field: string remaining_dimensions = 14;

#### Defined in

src/stock_returns.scailo_pb.ts:604

___

### stockReturnId

• **stockReturnId**: `bigint` = `protoInt64.zero`

Stores the stock return ID

**`Generated`**

from field: uint64 stock_return_id = 10;

#### Defined in

src/stock_returns.scailo_pb.ts:576

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/stock_returns.scailo_pb.ts:569

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_returns.scailo_pb.ts:613

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_returns.scailo_pb.ts:611

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockReturnsServiceItemCreateRequest"``

#### Defined in

src/stock_returns.scailo_pb.ts:612

## Methods

### clone

▸ **clone**(): [`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md) \| `PlainMessage`\<[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md) \| `PlainMessage`\<[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md) \| `PlainMessage`\<[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_returns.scailo_pb.ts:634

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

#### Defined in

src/stock_returns.scailo_pb.ts:622

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

#### Defined in

src/stock_returns.scailo_pb.ts:626

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceItemCreateRequest`](StockReturnsServiceItemCreateRequest.md)

#### Defined in

src/stock_returns.scailo_pb.ts:630
