[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReturnsServiceItemUpdateRequest

# Class: SalesReturnsServiceItemUpdateRequest

Describes the parameters required to update an item in a sales return

**`Generated`**

from message Scailo.SalesReturnsServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)\>

  ↳ **`SalesReturnsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesReturnsServiceItemUpdateRequest.md#constructor)

### Properties

- [clientQuantity](SalesReturnsServiceItemUpdateRequest.md#clientquantity)
- [clientUomId](SalesReturnsServiceItemUpdateRequest.md#clientuomid)
- [id](SalesReturnsServiceItemUpdateRequest.md#id)
- [internalQuantity](SalesReturnsServiceItemUpdateRequest.md#internalquantity)
- [itemHash](SalesReturnsServiceItemUpdateRequest.md#itemhash)
- [userComment](SalesReturnsServiceItemUpdateRequest.md#usercomment)
- [fields](SalesReturnsServiceItemUpdateRequest.md#fields)
- [runtime](SalesReturnsServiceItemUpdateRequest.md#runtime)
- [typeName](SalesReturnsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](SalesReturnsServiceItemUpdateRequest.md#clone)
- [equals](SalesReturnsServiceItemUpdateRequest.md#equals)
- [fromBinary](SalesReturnsServiceItemUpdateRequest.md#frombinary)
- [fromJson](SalesReturnsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](SalesReturnsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](SalesReturnsServiceItemUpdateRequest.md#gettype)
- [toBinary](SalesReturnsServiceItemUpdateRequest.md#tobinary)
- [toJSON](SalesReturnsServiceItemUpdateRequest.md#tojson)
- [toJson](SalesReturnsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](SalesReturnsServiceItemUpdateRequest.md#tojsonstring)
- [equals](SalesReturnsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](SalesReturnsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](SalesReturnsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesReturnsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnsServiceItemUpdateRequest**(`data?`): [`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)\> |

#### Returns

[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;SalesReturnsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_returns.scailo_pb.ts:797](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L797)

## Properties

### clientQuantity

• **clientQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being dispatched in client's unit of material

**`Generated`**

from field: uint64 client_quantity = 15;

#### Defined in

[src/sales_returns.scailo_pb.ts:795](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L795)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 14;

#### Defined in

[src/sales_returns.scailo_pb.ts:788](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L788)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/sales_returns.scailo_pb.ts:767](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L767)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being dispatched in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

[src/sales_returns.scailo_pb.ts:781](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L781)

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

[src/sales_returns.scailo_pb.ts:774](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L774)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/sales_returns.scailo_pb.ts:760](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L760)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_returns.scailo_pb.ts:804](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L804)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_returns.scailo_pb.ts:802](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L802)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReturnsServiceItemUpdateRequest"``

#### Defined in

[src/sales_returns.scailo_pb.ts:803](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L803)

## Methods

### clone

▸ **clone**(): [`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_returns.scailo_pb.ts:825](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L825)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:813](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L813)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:817](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L817)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceItemUpdateRequest`](SalesReturnsServiceItemUpdateRequest.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:821](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_returns.scailo_pb.ts#L821)
