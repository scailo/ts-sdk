[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesReturnsServicePaginationResponse

# Class: PurchasesReturnsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.PurchasesReturnsServicePaginationResponse

## Hierarchy

- `Message`\<[`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md)\>

  ↳ **`PurchasesReturnsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](PurchasesReturnsServicePaginationResponse.md#constructor)

### Properties

- [count](PurchasesReturnsServicePaginationResponse.md#count)
- [offset](PurchasesReturnsServicePaginationResponse.md#offset)
- [payload](PurchasesReturnsServicePaginationResponse.md#payload)
- [total](PurchasesReturnsServicePaginationResponse.md#total)
- [fields](PurchasesReturnsServicePaginationResponse.md#fields)
- [runtime](PurchasesReturnsServicePaginationResponse.md#runtime)
- [typeName](PurchasesReturnsServicePaginationResponse.md#typename)

### Methods

- [clone](PurchasesReturnsServicePaginationResponse.md#clone)
- [equals](PurchasesReturnsServicePaginationResponse.md#equals)
- [fromBinary](PurchasesReturnsServicePaginationResponse.md#frombinary)
- [fromJson](PurchasesReturnsServicePaginationResponse.md#fromjson)
- [fromJsonString](PurchasesReturnsServicePaginationResponse.md#fromjsonstring)
- [getType](PurchasesReturnsServicePaginationResponse.md#gettype)
- [toBinary](PurchasesReturnsServicePaginationResponse.md#tobinary)
- [toJSON](PurchasesReturnsServicePaginationResponse.md#tojson)
- [toJson](PurchasesReturnsServicePaginationResponse.md#tojson-1)
- [toJsonString](PurchasesReturnsServicePaginationResponse.md#tojsonstring)
- [equals](PurchasesReturnsServicePaginationResponse.md#equals-1)
- [fromBinary](PurchasesReturnsServicePaginationResponse.md#frombinary-1)
- [fromJson](PurchasesReturnsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](PurchasesReturnsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesReturnsServicePaginationResponse**(`data?`): [`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md)\> |

#### Returns

[`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md)

#### Overrides

Message\&lt;PurchasesReturnsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/purchases_returns.scailo_pb.ts:1705](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_returns.scailo_pb.ts#L1705)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/purchases_returns.scailo_pb.ts:1675](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_returns.scailo_pb.ts#L1675)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/purchases_returns.scailo_pb.ts:1685](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_returns.scailo_pb.ts#L1685)

___

### payload

• **payload**: [`PurchaseReturn`](PurchaseReturn.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.PurchaseReturn payload = 4;

#### Defined in

[src/purchases_returns.scailo_pb.ts:1703](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_returns.scailo_pb.ts#L1703)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/purchases_returns.scailo_pb.ts:1695](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_returns.scailo_pb.ts#L1695)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_returns.scailo_pb.ts:1712](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_returns.scailo_pb.ts#L1712)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_returns.scailo_pb.ts:1710](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_returns.scailo_pb.ts#L1710)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesReturnsServicePaginationResponse"``

#### Defined in

[src/purchases_returns.scailo_pb.ts:1711](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_returns.scailo_pb.ts#L1711)

## Methods

### clone

▸ **clone**(): [`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md) \| `PlainMessage`\<[`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md) \| `PlainMessage`\<[`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md) \| `PlainMessage`\<[`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_returns.scailo_pb.ts:1731](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_returns.scailo_pb.ts#L1731)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md)

#### Defined in

[src/purchases_returns.scailo_pb.ts:1719](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_returns.scailo_pb.ts#L1719)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md)

#### Defined in

[src/purchases_returns.scailo_pb.ts:1723](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_returns.scailo_pb.ts#L1723)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServicePaginationResponse`](PurchasesReturnsServicePaginationResponse.md)

#### Defined in

[src/purchases_returns.scailo_pb.ts:1727](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_returns.scailo_pb.ts#L1727)
