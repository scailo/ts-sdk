[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseOrderPriceMatchList

# Class: PurchaseOrderPriceMatchList

Describes the list of inventory match families

**`Generated`**

from message Scailo.PurchaseOrderPriceMatchList

## Hierarchy

- `Message`\<[`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md)\>

  ↳ **`PurchaseOrderPriceMatchList`**

## Table of contents

### Constructors

- [constructor](PurchaseOrderPriceMatchList.md#constructor)

### Properties

- [list](PurchaseOrderPriceMatchList.md#list)
- [fields](PurchaseOrderPriceMatchList.md#fields)
- [runtime](PurchaseOrderPriceMatchList.md#runtime)
- [typeName](PurchaseOrderPriceMatchList.md#typename)

### Methods

- [clone](PurchaseOrderPriceMatchList.md#clone)
- [equals](PurchaseOrderPriceMatchList.md#equals)
- [fromBinary](PurchaseOrderPriceMatchList.md#frombinary)
- [fromJson](PurchaseOrderPriceMatchList.md#fromjson)
- [fromJsonString](PurchaseOrderPriceMatchList.md#fromjsonstring)
- [getType](PurchaseOrderPriceMatchList.md#gettype)
- [toBinary](PurchaseOrderPriceMatchList.md#tobinary)
- [toJSON](PurchaseOrderPriceMatchList.md#tojson)
- [toJson](PurchaseOrderPriceMatchList.md#tojson-1)
- [toJsonString](PurchaseOrderPriceMatchList.md#tojsonstring)
- [equals](PurchaseOrderPriceMatchList.md#equals-1)
- [fromBinary](PurchaseOrderPriceMatchList.md#frombinary-1)
- [fromJson](PurchaseOrderPriceMatchList.md#fromjson-1)
- [fromJsonString](PurchaseOrderPriceMatchList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseOrderPriceMatchList**(`data?`): [`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md)\> |

#### Returns

[`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md)

#### Overrides

Message\&lt;PurchaseOrderPriceMatchList\&gt;.constructor

#### Defined in

[src/purchases_orders.scailo_pb.ts:3611](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3611)

## Properties

### list

• **list**: [`PurchaseOrderPriceMatch`](PurchaseOrderPriceMatch.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.PurchaseOrderPriceMatch list = 1;

#### Defined in

[src/purchases_orders.scailo_pb.ts:3609](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3609)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_orders.scailo_pb.ts:3618](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3618)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_orders.scailo_pb.ts:3616](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3616)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseOrderPriceMatchList"``

#### Defined in

[src/purchases_orders.scailo_pb.ts:3617](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3617)

## Methods

### clone

▸ **clone**(): [`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md)

Create a deep copy.

#### Returns

[`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md) \| `PlainMessage`\<[`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md)\>

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
| `a` | `undefined` \| [`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md) \| `PlainMessage`\<[`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md)\> |
| `b` | `undefined` \| [`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md) \| `PlainMessage`\<[`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_orders.scailo_pb.ts:3634](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3634)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:3622](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3622)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:3626](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3626)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseOrderPriceMatchList`](PurchaseOrderPriceMatchList.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:3630](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L3630)
