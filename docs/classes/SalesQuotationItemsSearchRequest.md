[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationItemsSearchRequest

# Class: SalesQuotationItemsSearchRequest

Request payload structure used to search and filter Sales Quotation Item records.
Supports pagination controls, tenancy isolation, status grouping, and text-based matching.

**`Generated`**

from message Scailo.SalesQuotationItemsSearchRequest

## Hierarchy

- `Message`\<[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)\>

  ↳ **`SalesQuotationItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](SalesQuotationItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](SalesQuotationItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](SalesQuotationItemsSearchRequest.md#approvedonend)
- [approvedOnStart](SalesQuotationItemsSearchRequest.md#approvedonstart)
- [approverRoleId](SalesQuotationItemsSearchRequest.md#approverroleid)
- [bundledWithId](SalesQuotationItemsSearchRequest.md#bundledwithid)
- [clientFamilyCode](SalesQuotationItemsSearchRequest.md#clientfamilycode)
- [clientUomId](SalesQuotationItemsSearchRequest.md#clientuomid)
- [count](SalesQuotationItemsSearchRequest.md#count)
- [deliveryDateEnd](SalesQuotationItemsSearchRequest.md#deliverydateend)
- [deliveryDateExact](SalesQuotationItemsSearchRequest.md#deliverydateexact)
- [deliveryDateStart](SalesQuotationItemsSearchRequest.md#deliverydatestart)
- [entityUuid](SalesQuotationItemsSearchRequest.md#entityuuid)
- [familyId](SalesQuotationItemsSearchRequest.md#familyid)
- [isActive](SalesQuotationItemsSearchRequest.md#isactive)
- [offset](SalesQuotationItemsSearchRequest.md#offset)
- [salesQuotationId](SalesQuotationItemsSearchRequest.md#salesquotationid)
- [searchKey](SalesQuotationItemsSearchRequest.md#searchkey)
- [sortKey](SalesQuotationItemsSearchRequest.md#sortkey)
- [sortOrder](SalesQuotationItemsSearchRequest.md#sortorder)
- [status](SalesQuotationItemsSearchRequest.md#status)
- [taxGroupId](SalesQuotationItemsSearchRequest.md#taxgroupid)
- [fields](SalesQuotationItemsSearchRequest.md#fields)
- [runtime](SalesQuotationItemsSearchRequest.md#runtime)
- [typeName](SalesQuotationItemsSearchRequest.md#typename)

### Methods

- [clone](SalesQuotationItemsSearchRequest.md#clone)
- [equals](SalesQuotationItemsSearchRequest.md#equals)
- [fromBinary](SalesQuotationItemsSearchRequest.md#frombinary)
- [fromJson](SalesQuotationItemsSearchRequest.md#fromjson)
- [fromJsonString](SalesQuotationItemsSearchRequest.md#fromjsonstring)
- [getType](SalesQuotationItemsSearchRequest.md#gettype)
- [toBinary](SalesQuotationItemsSearchRequest.md#tobinary)
- [toJSON](SalesQuotationItemsSearchRequest.md#tojson)
- [toJson](SalesQuotationItemsSearchRequest.md#tojson-1)
- [toJsonString](SalesQuotationItemsSearchRequest.md#tojsonstring)
- [equals](SalesQuotationItemsSearchRequest.md#equals-1)
- [fromBinary](SalesQuotationItemsSearchRequest.md#frombinary-1)
- [fromJson](SalesQuotationItemsSearchRequest.md#fromjson-1)
- [fromJsonString](SalesQuotationItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationItemsSearchRequest**(`data?`): [`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)\> |

#### Returns

[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

#### Overrides

Message\&lt;SalesQuotationItemsSearchRequest\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:4665](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4665)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_by_user_id = 12;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4487](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4487)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_on_end = 11;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4471](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4471)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_on_start = 10;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4455](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4455)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approver_role_id = 13;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4503](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4503)

___

### bundledWithId

• `Optional` **bundledWithId**: `bigint`

**`Optional`**

**`Description`**

Filter by the internal identifier of the primary sales quotation line item that this item is bundled with.

**`Example`**

```ts
1025
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 bundled_with_id = 21;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4535](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4535)

___

### clientFamilyCode

• `Optional` **clientFamilyCode**: `string`

**`Optional`**

**`Description`**

Fuzzy match for the client's specific alphanumeric part number, SKU, or family code.

**`Example`**

```ts
"CLI-SKU-992"
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string client_family_code = 26;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4583](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4583)

___

### clientUomId

• `Optional` **clientUomId**: `bigint`

**`Optional`**

**`Description`**

Filter line items requesting a specific client Unit of Measure (UOM).

**`Example`**

```ts
12
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 client_uom_id = 23;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4567](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4567)

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

[src/sales_quotations.scailo_pb.ts:4375](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4375)

___

### deliveryDateEnd

• `Optional` **deliveryDateEnd**: `string`

**`Optional`**

**`Description`**

Filter line items scheduled for delivery ON or BEFORE this specific proposed date.

**`Example`**

```ts
"2023-11-30"
```

**`Regex`**

.*

**`Format`**

String following the standard date format (e.g., YYYY-MM-DD).

**`Generated`**

from field: optional string delivery_date_end = 30;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4647](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4647)

___

### deliveryDateExact

• `Optional` **deliveryDateExact**: `string`

**`Optional`**

**`Description`**

Filter line items scheduled for exact delivery on this specific proposed date.

**`Example`**

```ts
"2023-11-15"
```

**`Regex`**

.*

**`Format`**

String following the standard date format (e.g., YYYY-MM-DD).

**`Generated`**

from field: optional string delivery_date_exact = 28;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4615](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4615)

___

### deliveryDateStart

• `Optional` **deliveryDateStart**: `string`

**`Optional`**

**`Description`**

Filter line items scheduled for delivery ON or AFTER this specific proposed date.

**`Example`**

```ts
"2023-11-01"
```

**`Regex`**

.*

**`Format`**

String following the standard date format (e.g., YYYY-MM-DD).

**`Generated`**

from field: optional string delivery_date_start = 29;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4631](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4631)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 6;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4429](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4429)

___

### familyId

• `Optional` **familyId**: `bigint`

**`Optional`**

**`Description`**

Filter line items belonging to a specific family.

**`Example`**

```ts
505
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 family_id = 22;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4551](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4551)

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

[src/sales_quotations.scailo_pb.ts:4359](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4359)

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

[src/sales_quotations.scailo_pb.ts:4391](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4391)

___

### salesQuotationId

• `Optional` **salesQuotationId**: `bigint`

**`Optional`**

**`Description`**

Filter line items belonging to a specific parent sales quotation.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 sales_quotation_id = 20;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4519](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4519)

___

### searchKey

• `Optional` **searchKey**: `string`

**`Optional`**

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

from field: optional string search_key = 40;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4663](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4663)

___

### sortKey

• `Optional` **sortKey**: [`SALES_QUOTATION_ITEM_SORT_KEY`](../enums/SALES_QUOTATION_ITEM_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.SALES_QUOTATION_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4413](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4413)

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

[src/sales_quotations.scailo_pb.ts:4403](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4403)

___

### status

• `Optional` **status**: [`SALES_QUOTATION_ITEM_STATUS`](../enums/SALES_QUOTATION_ITEM_STATUS.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.SALES_QUOTATION_ITEM_STATUS status = 7;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4439](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4439)

___

### taxGroupId

• `Optional` **taxGroupId**: `bigint`

**`Optional`**

**`Description`**

Filter line items mapped to a specific tax group.

**`Example`**

```ts
4
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 tax_group_id = 27;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4599](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4599)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:4672](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4672)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:4670](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4670)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationItemsSearchRequest"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:4671](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4671)

## Methods

### clone

▸ **clone**(): [`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md) \| `PlainMessage`\<[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md) \| `PlainMessage`\<[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md) \| `PlainMessage`\<[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:4708](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4708)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:4696](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4696)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:4700](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4700)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationItemsSearchRequest`](SalesQuotationItemsSearchRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:4704](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_quotations.scailo_pb.ts#L4704)
