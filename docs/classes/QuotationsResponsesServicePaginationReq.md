[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsResponsesServicePaginationReq

# Class: QuotationsResponsesServicePaginationReq

Describes a pagination response to retrieve records

**`Generated`**

from message Scailo.QuotationsResponsesServicePaginationReq

## Hierarchy

- `Message`\<[`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md)\>

  ↳ **`QuotationsResponsesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](QuotationsResponsesServicePaginationReq.md#constructor)

### Properties

- [count](QuotationsResponsesServicePaginationReq.md#count)
- [isActive](QuotationsResponsesServicePaginationReq.md#isactive)
- [offset](QuotationsResponsesServicePaginationReq.md#offset)
- [sortKey](QuotationsResponsesServicePaginationReq.md#sortkey)
- [sortOrder](QuotationsResponsesServicePaginationReq.md#sortorder)
- [status](QuotationsResponsesServicePaginationReq.md#status)
- [fields](QuotationsResponsesServicePaginationReq.md#fields)
- [runtime](QuotationsResponsesServicePaginationReq.md#runtime)
- [typeName](QuotationsResponsesServicePaginationReq.md#typename)

### Methods

- [clone](QuotationsResponsesServicePaginationReq.md#clone)
- [equals](QuotationsResponsesServicePaginationReq.md#equals)
- [fromBinary](QuotationsResponsesServicePaginationReq.md#frombinary)
- [fromJson](QuotationsResponsesServicePaginationReq.md#fromjson)
- [fromJsonString](QuotationsResponsesServicePaginationReq.md#fromjsonstring)
- [getType](QuotationsResponsesServicePaginationReq.md#gettype)
- [toBinary](QuotationsResponsesServicePaginationReq.md#tobinary)
- [toJSON](QuotationsResponsesServicePaginationReq.md#tojson)
- [toJson](QuotationsResponsesServicePaginationReq.md#tojson-1)
- [toJsonString](QuotationsResponsesServicePaginationReq.md#tojsonstring)
- [equals](QuotationsResponsesServicePaginationReq.md#equals-1)
- [fromBinary](QuotationsResponsesServicePaginationReq.md#frombinary-1)
- [fromJson](QuotationsResponsesServicePaginationReq.md#fromjson-1)
- [fromJsonString](QuotationsResponsesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsResponsesServicePaginationReq**(`data?`): [`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md)\> |

#### Returns

[`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md)

#### Overrides

Message\&lt;QuotationsResponsesServicePaginationReq\&gt;.constructor

#### Defined in

[src/quotations_responses.scailo_pb.ts:1710](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/quotations_responses.scailo_pb.ts#L1710)

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

[src/quotations_responses.scailo_pb.ts:1663](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/quotations_responses.scailo_pb.ts#L1663)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1647](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/quotations_responses.scailo_pb.ts#L1647)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

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

from field: uint64 offset = 3;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1679](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/quotations_responses.scailo_pb.ts#L1679)

___

### sortKey

• **sortKey**: [`QUOTATION_RESPONSE_SORT_KEY`](../enums/QUOTATION_RESPONSE_SORT_KEY.md) = `QUOTATION_RESPONSE_SORT_KEY.QUOTATION_RESPONSE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.QUOTATION_RESPONSE_SORT_KEY sort_key = 5;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1701](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/quotations_responses.scailo_pb.ts#L1701)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1691](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/quotations_responses.scailo_pb.ts#L1691)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this quotation response

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/quotations_responses.scailo_pb.ts:1708](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/quotations_responses.scailo_pb.ts#L1708)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_responses.scailo_pb.ts:1717](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/quotations_responses.scailo_pb.ts#L1717)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_responses.scailo_pb.ts:1715](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/quotations_responses.scailo_pb.ts#L1715)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsResponsesServicePaginationReq"``

#### Defined in

[src/quotations_responses.scailo_pb.ts:1716](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/quotations_responses.scailo_pb.ts#L1716)

## Methods

### clone

▸ **clone**(): [`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md) \| `PlainMessage`\<[`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md) \| `PlainMessage`\<[`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md) \| `PlainMessage`\<[`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_responses.scailo_pb.ts:1738](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/quotations_responses.scailo_pb.ts#L1738)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:1726](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/quotations_responses.scailo_pb.ts#L1726)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:1730](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/quotations_responses.scailo_pb.ts#L1730)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServicePaginationReq`](QuotationsResponsesServicePaginationReq.md)

#### Defined in

[src/quotations_responses.scailo_pb.ts:1734](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/quotations_responses.scailo_pb.ts#L1734)
