[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CurrenciesServicePaginationReq

# Class: CurrenciesServicePaginationReq

Pagination request for retrieving slices of Currency records.

**`Generated`**

from message Scailo.CurrenciesServicePaginationReq

## Hierarchy

- `Message`\<[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)\>

  ↳ **`CurrenciesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](CurrenciesServicePaginationReq.md#constructor)

### Properties

- [count](CurrenciesServicePaginationReq.md#count)
- [isActive](CurrenciesServicePaginationReq.md#isactive)
- [offset](CurrenciesServicePaginationReq.md#offset)
- [sortKey](CurrenciesServicePaginationReq.md#sortkey)
- [sortOrder](CurrenciesServicePaginationReq.md#sortorder)
- [status](CurrenciesServicePaginationReq.md#status)
- [fields](CurrenciesServicePaginationReq.md#fields)
- [runtime](CurrenciesServicePaginationReq.md#runtime)
- [typeName](CurrenciesServicePaginationReq.md#typename)

### Methods

- [clone](CurrenciesServicePaginationReq.md#clone)
- [equals](CurrenciesServicePaginationReq.md#equals)
- [fromBinary](CurrenciesServicePaginationReq.md#frombinary)
- [fromJson](CurrenciesServicePaginationReq.md#fromjson)
- [fromJsonString](CurrenciesServicePaginationReq.md#fromjsonstring)
- [getType](CurrenciesServicePaginationReq.md#gettype)
- [toBinary](CurrenciesServicePaginationReq.md#tobinary)
- [toJSON](CurrenciesServicePaginationReq.md#tojson)
- [toJson](CurrenciesServicePaginationReq.md#tojson-1)
- [toJsonString](CurrenciesServicePaginationReq.md#tojsonstring)
- [equals](CurrenciesServicePaginationReq.md#equals-1)
- [fromBinary](CurrenciesServicePaginationReq.md#frombinary-1)
- [fromJson](CurrenciesServicePaginationReq.md#fromjson-1)
- [fromJsonString](CurrenciesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new CurrenciesServicePaginationReq**(`data?`): [`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)\> |

#### Returns

[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

#### Overrides

Message\&lt;CurrenciesServicePaginationReq\&gt;.constructor

#### Defined in

[src/currencies.scailo_pb.ts:678](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L678)

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

[src/currencies.scailo_pb.ts:626](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L626)

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

[src/currencies.scailo_pb.ts:610](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L610)

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

[src/currencies.scailo_pb.ts:642](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L642)

___

### sortKey

• `Optional` **sortKey**: [`CURRENCY_SORT_KEY`](../enums/CURRENCY_SORT_KEY.md)

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: optional Scailo.CURRENCY_SORT_KEY sort_key = 5;

#### Defined in

[src/currencies.scailo_pb.ts:664](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L664)

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

[src/currencies.scailo_pb.ts:654](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L654)

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

[src/currencies.scailo_pb.ts:676](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L676)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/currencies.scailo_pb.ts:685](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L685)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/currencies.scailo_pb.ts:683](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L683)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CurrenciesServicePaginationReq"``

#### Defined in

[src/currencies.scailo_pb.ts:684](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L684)

## Methods

### clone

▸ **clone**(): [`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md) \| `PlainMessage`\<[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md) \| `PlainMessage`\<[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md) \| `PlainMessage`\<[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/currencies.scailo_pb.ts:706](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L706)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:694](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L694)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:698](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L698)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServicePaginationReq`](CurrenciesServicePaginationReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:702](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/currencies.scailo_pb.ts#L702)
