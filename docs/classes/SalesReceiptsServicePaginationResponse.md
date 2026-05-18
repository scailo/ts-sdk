[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReceiptsServicePaginationResponse

# Class: SalesReceiptsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.SalesReceiptsServicePaginationResponse

## Hierarchy

- `Message`\<[`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md)\>

  ↳ **`SalesReceiptsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](SalesReceiptsServicePaginationResponse.md#constructor)

### Properties

- [count](SalesReceiptsServicePaginationResponse.md#count)
- [offset](SalesReceiptsServicePaginationResponse.md#offset)
- [payload](SalesReceiptsServicePaginationResponse.md#payload)
- [total](SalesReceiptsServicePaginationResponse.md#total)
- [fields](SalesReceiptsServicePaginationResponse.md#fields)
- [runtime](SalesReceiptsServicePaginationResponse.md#runtime)
- [typeName](SalesReceiptsServicePaginationResponse.md#typename)

### Methods

- [clone](SalesReceiptsServicePaginationResponse.md#clone)
- [equals](SalesReceiptsServicePaginationResponse.md#equals)
- [fromBinary](SalesReceiptsServicePaginationResponse.md#frombinary)
- [fromJson](SalesReceiptsServicePaginationResponse.md#fromjson)
- [fromJsonString](SalesReceiptsServicePaginationResponse.md#fromjsonstring)
- [getType](SalesReceiptsServicePaginationResponse.md#gettype)
- [toBinary](SalesReceiptsServicePaginationResponse.md#tobinary)
- [toJSON](SalesReceiptsServicePaginationResponse.md#tojson)
- [toJson](SalesReceiptsServicePaginationResponse.md#tojson-1)
- [toJsonString](SalesReceiptsServicePaginationResponse.md#tojsonstring)
- [equals](SalesReceiptsServicePaginationResponse.md#equals-1)
- [fromBinary](SalesReceiptsServicePaginationResponse.md#frombinary-1)
- [fromJson](SalesReceiptsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](SalesReceiptsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReceiptsServicePaginationResponse**(`data?`): [`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md)\> |

#### Returns

[`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md)

#### Overrides

Message\&lt;SalesReceiptsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/sales_receipts.scailo_pb.ts:933](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_receipts.scailo_pb.ts#L933)

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

[src/sales_receipts.scailo_pb.ts:903](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_receipts.scailo_pb.ts#L903)

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

[src/sales_receipts.scailo_pb.ts:913](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_receipts.scailo_pb.ts#L913)

___

### payload

• **payload**: [`SalesReceipt`](SalesReceipt.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.SalesReceipt payload = 4;

#### Defined in

[src/sales_receipts.scailo_pb.ts:931](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_receipts.scailo_pb.ts#L931)

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

[src/sales_receipts.scailo_pb.ts:923](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_receipts.scailo_pb.ts#L923)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_receipts.scailo_pb.ts:940](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_receipts.scailo_pb.ts#L940)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_receipts.scailo_pb.ts:938](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_receipts.scailo_pb.ts#L938)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReceiptsServicePaginationResponse"``

#### Defined in

[src/sales_receipts.scailo_pb.ts:939](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_receipts.scailo_pb.ts#L939)

## Methods

### clone

▸ **clone**(): [`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md) \| `PlainMessage`\<[`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md) \| `PlainMessage`\<[`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md) \| `PlainMessage`\<[`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_receipts.scailo_pb.ts:959](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_receipts.scailo_pb.ts#L959)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:947](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_receipts.scailo_pb.ts#L947)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:951](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_receipts.scailo_pb.ts#L951)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServicePaginationResponse`](SalesReceiptsServicePaginationResponse.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:955](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_receipts.scailo_pb.ts#L955)
