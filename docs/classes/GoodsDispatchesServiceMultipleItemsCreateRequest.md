[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceMultipleItemsCreateRequest

# Class: GoodsDispatchesServiceMultipleItemsCreateRequest

Request message for appending multiple line items to a Goods Dispatch in a single batch transaction.
Optimized for scenarios like imports or autofill operations where dozens of items
are attached simultaneously to a parent record.

**`Generated`**

from message Scailo.GoodsDispatchesServiceMultipleItemsCreateRequest

## Hierarchy

- `Message`\<[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)\>

  ↳ **`GoodsDispatchesServiceMultipleItemsCreateRequest`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceMultipleItemsCreateRequest.md#constructor)

### Properties

- [goodsDispatchId](GoodsDispatchesServiceMultipleItemsCreateRequest.md#goodsdispatchid)
- [list](GoodsDispatchesServiceMultipleItemsCreateRequest.md#list)
- [userComment](GoodsDispatchesServiceMultipleItemsCreateRequest.md#usercomment)
- [fields](GoodsDispatchesServiceMultipleItemsCreateRequest.md#fields)
- [runtime](GoodsDispatchesServiceMultipleItemsCreateRequest.md#runtime)
- [typeName](GoodsDispatchesServiceMultipleItemsCreateRequest.md#typename)

### Methods

- [clone](GoodsDispatchesServiceMultipleItemsCreateRequest.md#clone)
- [equals](GoodsDispatchesServiceMultipleItemsCreateRequest.md#equals)
- [fromBinary](GoodsDispatchesServiceMultipleItemsCreateRequest.md#frombinary)
- [fromJson](GoodsDispatchesServiceMultipleItemsCreateRequest.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceMultipleItemsCreateRequest.md#fromjsonstring)
- [getType](GoodsDispatchesServiceMultipleItemsCreateRequest.md#gettype)
- [toBinary](GoodsDispatchesServiceMultipleItemsCreateRequest.md#tobinary)
- [toJSON](GoodsDispatchesServiceMultipleItemsCreateRequest.md#tojson)
- [toJson](GoodsDispatchesServiceMultipleItemsCreateRequest.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceMultipleItemsCreateRequest.md#tojsonstring)
- [equals](GoodsDispatchesServiceMultipleItemsCreateRequest.md#equals-1)
- [fromBinary](GoodsDispatchesServiceMultipleItemsCreateRequest.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceMultipleItemsCreateRequest.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceMultipleItemsCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceMultipleItemsCreateRequest**(`data?`): [`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)\> |

#### Returns

[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

#### Overrides

Message\&lt;GoodsDispatchesServiceMultipleItemsCreateRequest\&gt;.constructor

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1316](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1316)

## Properties

### goodsDispatchId

• **goodsDispatchId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the parent goods dispatch to which this batch of items will be attached.

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 goods_dispatch_id = 10;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1300](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1300)

___

### list

• **list**: [`GoodsDispatchesServiceMultipleItemsSingleton`](GoodsDispatchesServiceMultipleItemsSingleton.md)[] = `[]`

**`Mandatory`**

**`Description`**

An array containing the individual line item payloads to be appended to the invoice.

**`Example`**

```ts
[]
```

**`Format`**

Repeated array of GoodsDispatchesServiceMultipleItemsSingleton message blocks.

**`Generated`**

from field: repeated Scailo.GoodsDispatchesServiceMultipleItemsSingleton list = 11;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1314](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1314)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 1;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1284](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1284)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1323](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1323)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1321](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1321)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchesServiceMultipleItemsCreateRequest"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1322](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1322)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1341](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1341)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1329](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1329)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1333](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1333)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceMultipleItemsCreateRequest`](GoodsDispatchesServiceMultipleItemsCreateRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1337](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/goods_dispatches.scailo_pb.ts#L1337)
