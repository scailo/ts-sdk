[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReturnsServiceSearchAllReq

# Class: SalesReturnsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.SalesReturnsServiceSearchAllReq

## Hierarchy

- `Message`\<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\>

  ↳ **`SalesReturnsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](SalesReturnsServiceSearchAllReq.md#constructor)

### Properties

- [billingStatus](SalesReturnsServiceSearchAllReq.md#billingstatus)
- [buyerClientId](SalesReturnsServiceSearchAllReq.md#buyerclientid)
- [consigneeClientId](SalesReturnsServiceSearchAllReq.md#consigneeclientid)
- [count](SalesReturnsServiceSearchAllReq.md#count)
- [entityUuid](SalesReturnsServiceSearchAllReq.md#entityuuid)
- [isActive](SalesReturnsServiceSearchAllReq.md#isactive)
- [offset](SalesReturnsServiceSearchAllReq.md#offset)
- [refFrom](SalesReturnsServiceSearchAllReq.md#reffrom)
- [refId](SalesReturnsServiceSearchAllReq.md#refid)
- [searchKey](SalesReturnsServiceSearchAllReq.md#searchkey)
- [sortKey](SalesReturnsServiceSearchAllReq.md#sortkey)
- [sortOrder](SalesReturnsServiceSearchAllReq.md#sortorder)
- [status](SalesReturnsServiceSearchAllReq.md#status)
- [fields](SalesReturnsServiceSearchAllReq.md#fields)
- [runtime](SalesReturnsServiceSearchAllReq.md#runtime)
- [typeName](SalesReturnsServiceSearchAllReq.md#typename)

### Methods

- [clone](SalesReturnsServiceSearchAllReq.md#clone)
- [equals](SalesReturnsServiceSearchAllReq.md#equals)
- [fromBinary](SalesReturnsServiceSearchAllReq.md#frombinary)
- [fromJson](SalesReturnsServiceSearchAllReq.md#fromjson)
- [fromJsonString](SalesReturnsServiceSearchAllReq.md#fromjsonstring)
- [getType](SalesReturnsServiceSearchAllReq.md#gettype)
- [toBinary](SalesReturnsServiceSearchAllReq.md#tobinary)
- [toJSON](SalesReturnsServiceSearchAllReq.md#tojson)
- [toJson](SalesReturnsServiceSearchAllReq.md#tojson-1)
- [toJsonString](SalesReturnsServiceSearchAllReq.md#tojsonstring)
- [equals](SalesReturnsServiceSearchAllReq.md#equals-1)
- [fromBinary](SalesReturnsServiceSearchAllReq.md#frombinary-1)
- [fromJson](SalesReturnsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](SalesReturnsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnsServiceSearchAllReq**(`data?`): [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\> |

#### Returns

[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Overrides

Message\&lt;SalesReturnsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/sales_returns.scailo_pb.ts:2655](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2655)

## Properties

### billingStatus

• **billingStatus**: [`SALES_RETURN_BILLING_STATUS`](../enums/SALES_RETURN_BILLING_STATUS.md) = `SALES_RETURN_BILLING_STATUS.SALES_RETURN_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the sales return bill

**`Generated`**

from field: Scailo.SALES_RETURN_BILLING_STATUS billing_status = 40;

#### Defined in

[src/sales_returns.scailo_pb.ts:2638](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2638)

___

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 61;

#### Defined in

[src/sales_returns.scailo_pb.ts:2653](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2653)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 60;

#### Defined in

[src/sales_returns.scailo_pb.ts:2646](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2646)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/sales_returns.scailo_pb.ts:2535](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2535)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/sales_returns.scailo_pb.ts:2589](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2589)

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

[src/sales_returns.scailo_pb.ts:2519](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2519)

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

[src/sales_returns.scailo_pb.ts:2551](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2551)

___

### refFrom

• **refFrom**: [`SALES_RETURN_REF_FROM`](../enums/SALES_RETURN_REF_FROM.md) = `SALES_RETURN_REF_FROM.SALES_RETURN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.SALES_RETURN_REF_FROM ref_from = 22;

#### Defined in

[src/sales_returns.scailo_pb.ts:2624](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2624)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/sales_returns.scailo_pb.ts:2631](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2631)

___

### searchKey

• **searchKey**: `string` = `""`

**`Mandatory`**

**`Description`**

The search string to match against reference IDs.

**`Example`**

```ts
"Medical 2023"
```

**`Regex`**

.*

@format: May contain any UTF-8 characters.

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/sales_returns.scailo_pb.ts:2617](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2617)

___

### sortKey

• **sortKey**: [`SALES_RETURN_SORT_KEY`](../enums/SALES_RETURN_SORT_KEY.md) = `SALES_RETURN_SORT_KEY.SALES_RETURN_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.SALES_RETURN_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_returns.scailo_pb.ts:2573](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2573)

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

[src/sales_returns.scailo_pb.ts:2563](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2563)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/sales_returns.scailo_pb.ts:2601](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2601)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_returns.scailo_pb.ts:2662](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2662)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_returns.scailo_pb.ts:2660](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2660)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReturnsServiceSearchAllReq"``

#### Defined in

[src/sales_returns.scailo_pb.ts:2661](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2661)

## Methods

### clone

▸ **clone**(): [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_returns.scailo_pb.ts:2690](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2690)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:2678](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2678)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:2682](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2682)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Defined in

[src/sales_returns.scailo_pb.ts:2686](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_returns.scailo_pb.ts#L2686)
