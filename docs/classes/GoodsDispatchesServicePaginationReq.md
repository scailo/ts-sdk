[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServicePaginationReq

# Class: GoodsDispatchesServicePaginationReq

Pagination request for retrieving slices of Goods Dispatch records.

**`Generated`**

from message Scailo.GoodsDispatchesServicePaginationReq

## Hierarchy

- `Message`\<[`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md)\>

  ↳ **`GoodsDispatchesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServicePaginationReq.md#constructor)

### Properties

- [count](GoodsDispatchesServicePaginationReq.md#count)
- [isActive](GoodsDispatchesServicePaginationReq.md#isactive)
- [offset](GoodsDispatchesServicePaginationReq.md#offset)
- [sortKey](GoodsDispatchesServicePaginationReq.md#sortkey)
- [sortOrder](GoodsDispatchesServicePaginationReq.md#sortorder)
- [status](GoodsDispatchesServicePaginationReq.md#status)
- [fields](GoodsDispatchesServicePaginationReq.md#fields)
- [runtime](GoodsDispatchesServicePaginationReq.md#runtime)
- [typeName](GoodsDispatchesServicePaginationReq.md#typename)

### Methods

- [clone](GoodsDispatchesServicePaginationReq.md#clone)
- [equals](GoodsDispatchesServicePaginationReq.md#equals)
- [fromBinary](GoodsDispatchesServicePaginationReq.md#frombinary)
- [fromJson](GoodsDispatchesServicePaginationReq.md#fromjson)
- [fromJsonString](GoodsDispatchesServicePaginationReq.md#fromjsonstring)
- [getType](GoodsDispatchesServicePaginationReq.md#gettype)
- [toBinary](GoodsDispatchesServicePaginationReq.md#tobinary)
- [toJSON](GoodsDispatchesServicePaginationReq.md#tojson)
- [toJson](GoodsDispatchesServicePaginationReq.md#tojson-1)
- [toJsonString](GoodsDispatchesServicePaginationReq.md#tojsonstring)
- [equals](GoodsDispatchesServicePaginationReq.md#equals-1)
- [fromBinary](GoodsDispatchesServicePaginationReq.md#frombinary-1)
- [fromJson](GoodsDispatchesServicePaginationReq.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServicePaginationReq**(`data?`): [`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md)\> |

#### Returns

[`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md)

#### Overrides

Message\&lt;GoodsDispatchesServicePaginationReq\&gt;.constructor

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2458](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L2458)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to return per page.

**`Example`**

```ts
50
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2406](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L2406)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2390](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L2390)

___

### offset

• `Optional` **offset**: `bigint`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 offset = 3;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2422](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L2422)

___

### sortKey

• `Optional` **sortKey**: [`GOODS_DISPATCH_SORT_KEY`](../enums/GOODS_DISPATCH_SORT_KEY.md)

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: optional Scailo.GOODS_DISPATCH_SORT_KEY sort_key = 5;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2444](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L2444)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2434](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L2434)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter results by a specific lifecycle status.

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2456](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L2456)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2465](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L2465)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2463](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L2463)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchesServicePaginationReq"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2464](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L2464)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md) \| `PlainMessage`\<[`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md) \| `PlainMessage`\<[`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md) \| `PlainMessage`\<[`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2486](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L2486)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2474](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L2474)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2478](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L2478)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServicePaginationReq`](GoodsDispatchesServicePaginationReq.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:2482](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L2482)
