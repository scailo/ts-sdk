[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiryItemsSearchRequest

# Class: SalesEnquiryItemsSearchRequest

Request payload structure used to search and filter Sales Enquiry Item records.
Supports pagination controls, tenancy isolation, status grouping, and text-based matching.

**`Generated`**

from message Scailo.SalesEnquiryItemsSearchRequest

## Hierarchy

- `Message`\<[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)\>

  ↳ **`SalesEnquiryItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](SalesEnquiryItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](SalesEnquiryItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](SalesEnquiryItemsSearchRequest.md#approvedonend)
- [approvedOnStart](SalesEnquiryItemsSearchRequest.md#approvedonstart)
- [approverRoleId](SalesEnquiryItemsSearchRequest.md#approverroleid)
- [count](SalesEnquiryItemsSearchRequest.md#count)
- [deliveryDateEnd](SalesEnquiryItemsSearchRequest.md#deliverydateend)
- [deliveryDateExact](SalesEnquiryItemsSearchRequest.md#deliverydateexact)
- [deliveryDateStart](SalesEnquiryItemsSearchRequest.md#deliverydatestart)
- [entityUuid](SalesEnquiryItemsSearchRequest.md#entityuuid)
- [isActive](SalesEnquiryItemsSearchRequest.md#isactive)
- [offset](SalesEnquiryItemsSearchRequest.md#offset)
- [salesEnquiryId](SalesEnquiryItemsSearchRequest.md#salesenquiryid)
- [searchKey](SalesEnquiryItemsSearchRequest.md#searchkey)
- [sortKey](SalesEnquiryItemsSearchRequest.md#sortkey)
- [sortOrder](SalesEnquiryItemsSearchRequest.md#sortorder)
- [status](SalesEnquiryItemsSearchRequest.md#status)
- [taxGroupId](SalesEnquiryItemsSearchRequest.md#taxgroupid)
- [uomId](SalesEnquiryItemsSearchRequest.md#uomid)
- [fields](SalesEnquiryItemsSearchRequest.md#fields)
- [runtime](SalesEnquiryItemsSearchRequest.md#runtime)
- [typeName](SalesEnquiryItemsSearchRequest.md#typename)

### Methods

- [clone](SalesEnquiryItemsSearchRequest.md#clone)
- [equals](SalesEnquiryItemsSearchRequest.md#equals)
- [fromBinary](SalesEnquiryItemsSearchRequest.md#frombinary)
- [fromJson](SalesEnquiryItemsSearchRequest.md#fromjson)
- [fromJsonString](SalesEnquiryItemsSearchRequest.md#fromjsonstring)
- [getType](SalesEnquiryItemsSearchRequest.md#gettype)
- [toBinary](SalesEnquiryItemsSearchRequest.md#tobinary)
- [toJSON](SalesEnquiryItemsSearchRequest.md#tojson)
- [toJson](SalesEnquiryItemsSearchRequest.md#tojson-1)
- [toJsonString](SalesEnquiryItemsSearchRequest.md#tojsonstring)
- [equals](SalesEnquiryItemsSearchRequest.md#equals-1)
- [fromBinary](SalesEnquiryItemsSearchRequest.md#frombinary-1)
- [fromJson](SalesEnquiryItemsSearchRequest.md#fromjson-1)
- [fromJsonString](SalesEnquiryItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiryItemsSearchRequest**(`data?`): [`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)\> |

#### Returns

[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

#### Overrides

Message\&lt;SalesEnquiryItemsSearchRequest\&gt;.constructor

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2174](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L2174)

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

[src/sales_enquiries.scailo_pb.ts:2044](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L2044)

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

[src/sales_enquiries.scailo_pb.ts:2028](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L2028)

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

[src/sales_enquiries.scailo_pb.ts:2012](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L2012)

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

[src/sales_enquiries.scailo_pb.ts:2060](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L2060)

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

[src/sales_enquiries.scailo_pb.ts:1932](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1932)

___

### deliveryDateEnd

• `Optional` **deliveryDateEnd**: `string`

**`Optional`**

**`Description`**

Filter line items scheduled for delivery ON or BEFORE this specific date.

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

[src/sales_enquiries.scailo_pb.ts:2156](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L2156)

___

### deliveryDateExact

• `Optional` **deliveryDateExact**: `string`

**`Optional`**

**`Description`**

Filter line items scheduled for exact delivery on this specific date.

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

[src/sales_enquiries.scailo_pb.ts:2124](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L2124)

___

### deliveryDateStart

• `Optional` **deliveryDateStart**: `string`

**`Optional`**

**`Description`**

Filter line items scheduled for delivery ON or AFTER this specific date.

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

[src/sales_enquiries.scailo_pb.ts:2140](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L2140)

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

[src/sales_enquiries.scailo_pb.ts:1986](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1986)

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

[src/sales_enquiries.scailo_pb.ts:1916](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1916)

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

[src/sales_enquiries.scailo_pb.ts:1948](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1948)

___

### salesEnquiryId

• `Optional` **salesEnquiryId**: `bigint`

**`Optional`**

**`Description`**

Filter line items belonging to a specific parent sales enquiry.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 sales_enquiry_id = 20;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2076](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L2076)

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

[src/sales_enquiries.scailo_pb.ts:2172](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L2172)

___

### sortKey

• `Optional` **sortKey**: [`SALES_ENQUIRY_ITEM_SORT_KEY`](../enums/SALES_ENQUIRY_ITEM_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.SALES_ENQUIRY_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1970](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1970)

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

[src/sales_enquiries.scailo_pb.ts:1960](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1960)

___

### status

• `Optional` **status**: [`SALES_ENQUIRY_ITEM_STATUS`](../enums/SALES_ENQUIRY_ITEM_STATUS.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.SALES_ENQUIRY_ITEM_STATUS status = 7;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:1996](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L1996)

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

from field: optional uint64 tax_group_id = 22;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2108](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L2108)

___

### uomId

• `Optional` **uomId**: `bigint`

**`Optional`**

**`Description`**

Filter line items requesting a specific Unit of Measure (UOM).

**`Example`**

```ts
12
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 uom_id = 21;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2092](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L2092)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2181](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L2181)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2179](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L2179)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiryItemsSearchRequest"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2180](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L2180)

## Methods

### clone

▸ **clone**(): [`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md) \| `PlainMessage`\<[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md) \| `PlainMessage`\<[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md) \| `PlainMessage`\<[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2214](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L2214)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2202](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L2202)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2206](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L2206)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryItemsSearchRequest`](SalesEnquiryItemsSearchRequest.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2210](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L2210)
