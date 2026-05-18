[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceSearchAllReq

# Class: SalesInvoicesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.SalesInvoicesServiceSearchAllReq

## Hierarchy

- `Message`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\>

  ↳ **`SalesInvoicesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceSearchAllReq.md#constructor)

### Properties

- [buyerClientId](SalesInvoicesServiceSearchAllReq.md#buyerclientid)
- [consigneeClientId](SalesInvoicesServiceSearchAllReq.md#consigneeclientid)
- [count](SalesInvoicesServiceSearchAllReq.md#count)
- [entityUuid](SalesInvoicesServiceSearchAllReq.md#entityuuid)
- [isActive](SalesInvoicesServiceSearchAllReq.md#isactive)
- [offset](SalesInvoicesServiceSearchAllReq.md#offset)
- [refFrom](SalesInvoicesServiceSearchAllReq.md#reffrom)
- [refId](SalesInvoicesServiceSearchAllReq.md#refid)
- [searchKey](SalesInvoicesServiceSearchAllReq.md#searchkey)
- [sortKey](SalesInvoicesServiceSearchAllReq.md#sortkey)
- [sortOrder](SalesInvoicesServiceSearchAllReq.md#sortorder)
- [status](SalesInvoicesServiceSearchAllReq.md#status)
- [fields](SalesInvoicesServiceSearchAllReq.md#fields)
- [runtime](SalesInvoicesServiceSearchAllReq.md#runtime)
- [typeName](SalesInvoicesServiceSearchAllReq.md#typename)

### Methods

- [clone](SalesInvoicesServiceSearchAllReq.md#clone)
- [equals](SalesInvoicesServiceSearchAllReq.md#equals)
- [fromBinary](SalesInvoicesServiceSearchAllReq.md#frombinary)
- [fromJson](SalesInvoicesServiceSearchAllReq.md#fromjson)
- [fromJsonString](SalesInvoicesServiceSearchAllReq.md#fromjsonstring)
- [getType](SalesInvoicesServiceSearchAllReq.md#gettype)
- [toBinary](SalesInvoicesServiceSearchAllReq.md#tobinary)
- [toJSON](SalesInvoicesServiceSearchAllReq.md#tojson)
- [toJson](SalesInvoicesServiceSearchAllReq.md#tojson-1)
- [toJsonString](SalesInvoicesServiceSearchAllReq.md#tojsonstring)
- [equals](SalesInvoicesServiceSearchAllReq.md#equals-1)
- [fromBinary](SalesInvoicesServiceSearchAllReq.md#frombinary-1)
- [fromJson](SalesInvoicesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceSearchAllReq**(`data?`): [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\> |

#### Returns

[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Overrides

Message\&lt;SalesInvoicesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:2968](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2968)

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2966](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2966)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2959](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2959)

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

[src/sales_invoices.scailo_pb.ts:2855](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2855)

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

[src/sales_invoices.scailo_pb.ts:2909](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2909)

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

[src/sales_invoices.scailo_pb.ts:2839](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2839)

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

[src/sales_invoices.scailo_pb.ts:2871](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2871)

___

### refFrom

• **refFrom**: [`SALES_INVOICE_REF_FROM`](../enums/SALES_INVOICE_REF_FROM.md) = `SALES_INVOICE_REF_FROM.SALES_INVOICE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.SALES_INVOICE_REF_FROM ref_from = 22;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2944](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2944)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2951](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2951)

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

[src/sales_invoices.scailo_pb.ts:2937](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2937)

___

### sortKey

• **sortKey**: [`SALES_INVOICE_SORT_KEY`](../enums/SALES_INVOICE_SORT_KEY.md) = `SALES_INVOICE_SORT_KEY.SALES_INVOICE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.SALES_INVOICE_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_invoices.scailo_pb.ts:2893](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2893)

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

[src/sales_invoices.scailo_pb.ts:2883](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2883)

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

[src/sales_invoices.scailo_pb.ts:2921](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2921)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:2975](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2975)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:2973](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2973)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceSearchAllReq"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:2974](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2974)

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:3002](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L3002)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:2990](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2990)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:2994](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2994)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceSearchAllReq`](SalesInvoicesServiceSearchAllReq.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:2998](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_invoices.scailo_pb.ts#L2998)
