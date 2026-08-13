[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsServiceFilterReq

# Class: QuotationsRequestsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.QuotationsRequestsServiceFilterReq

## Hierarchy

- `Message`\<[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)\>

  ↳ **`QuotationsRequestsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](QuotationsRequestsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](QuotationsRequestsServiceFilterReq.md#approvedonend)
- [approvedOnStart](QuotationsRequestsServiceFilterReq.md#approvedonstart)
- [approverRoleId](QuotationsRequestsServiceFilterReq.md#approverroleid)
- [completedOnEnd](QuotationsRequestsServiceFilterReq.md#completedonend)
- [completedOnStart](QuotationsRequestsServiceFilterReq.md#completedonstart)
- [count](QuotationsRequestsServiceFilterReq.md#count)
- [creationTimestampEnd](QuotationsRequestsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](QuotationsRequestsServiceFilterReq.md#creationtimestampstart)
- [currencyId](QuotationsRequestsServiceFilterReq.md#currencyid)
- [entityUuid](QuotationsRequestsServiceFilterReq.md#entityuuid)
- [finalRefNumber](QuotationsRequestsServiceFilterReq.md#finalrefnumber)
- [formData](QuotationsRequestsServiceFilterReq.md#formdata)
- [includeFormData](QuotationsRequestsServiceFilterReq.md#includeformdata)
- [isActive](QuotationsRequestsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](QuotationsRequestsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](QuotationsRequestsServiceFilterReq.md#modificationtimestampstart)
- [offset](QuotationsRequestsServiceFilterReq.md#offset)
- [purchaseEnquiryId](QuotationsRequestsServiceFilterReq.md#purchaseenquiryid)
- [referenceId](QuotationsRequestsServiceFilterReq.md#referenceid)
- [sortKey](QuotationsRequestsServiceFilterReq.md#sortkey)
- [sortOrder](QuotationsRequestsServiceFilterReq.md#sortorder)
- [status](QuotationsRequestsServiceFilterReq.md#status)
- [fields](QuotationsRequestsServiceFilterReq.md#fields)
- [runtime](QuotationsRequestsServiceFilterReq.md#runtime)
- [typeName](QuotationsRequestsServiceFilterReq.md#typename)

### Methods

- [clone](QuotationsRequestsServiceFilterReq.md#clone)
- [equals](QuotationsRequestsServiceFilterReq.md#equals)
- [fromBinary](QuotationsRequestsServiceFilterReq.md#frombinary)
- [fromJson](QuotationsRequestsServiceFilterReq.md#fromjson)
- [fromJsonString](QuotationsRequestsServiceFilterReq.md#fromjsonstring)
- [getType](QuotationsRequestsServiceFilterReq.md#gettype)
- [toBinary](QuotationsRequestsServiceFilterReq.md#tobinary)
- [toJSON](QuotationsRequestsServiceFilterReq.md#tojson)
- [toJson](QuotationsRequestsServiceFilterReq.md#tojson-1)
- [toJsonString](QuotationsRequestsServiceFilterReq.md#tojsonstring)
- [equals](QuotationsRequestsServiceFilterReq.md#equals-1)
- [fromBinary](QuotationsRequestsServiceFilterReq.md#frombinary-1)
- [fromJson](QuotationsRequestsServiceFilterReq.md#fromjson-1)
- [fromJsonString](QuotationsRequestsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsServiceFilterReq**(`data?`): [`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)\> |

#### Returns

[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

#### Overrides

Message\&lt;QuotationsRequestsServiceFilterReq\&gt;.constructor

#### Defined in

[src/quotations_requests.scailo_pb.ts:2232](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2232)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

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

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/quotations_requests.scailo_pb.ts:2113](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2113)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

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

from field: uint64 approved_on_end = 12;

#### Defined in

[src/quotations_requests.scailo_pb.ts:2097](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2097)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

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

from field: uint64 approved_on_start = 11;

#### Defined in

[src/quotations_requests.scailo_pb.ts:2081](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2081)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

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

from field: uint64 approver_role_id = 14;

#### Defined in

[src/quotations_requests.scailo_pb.ts:2129](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2129)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/quotations_requests.scailo_pb.ts:2161](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2161)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/quotations_requests.scailo_pb.ts:2145](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2145)

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

[src/quotations_requests.scailo_pb.ts:1935](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1935)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/quotations_requests.scailo_pb.ts:2005](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2005)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1989](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1989)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated currency

**`Generated`**

from field: uint64 currency_id = 24;

#### Defined in

[src/quotations_requests.scailo_pb.ts:2207](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2207)

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

from field: string entity_uuid = 8;

#### Defined in

[src/quotations_requests.scailo_pb.ts:2053](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2053)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the system-generated ref number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/quotations_requests.scailo_pb.ts:2193](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2193)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/quotations_requests.scailo_pb.ts:2217](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2217)

___

### includeFormData

• **includeFormData**: `boolean` = `false`

**`Optional`**

**`Description`**

If `true`, the response will include the associated custom form field values for each record.
Set to `false` to improve performance when form data is not needed.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool include_form_data = 501;

#### Defined in

[src/quotations_requests.scailo_pb.ts:2230](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2230)

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

[src/quotations_requests.scailo_pb.ts:1919](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1919)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/quotations_requests.scailo_pb.ts:2037](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2037)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/quotations_requests.scailo_pb.ts:2021](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2021)

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

[src/quotations_requests.scailo_pb.ts:1951](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1951)

___

### purchaseEnquiryId

• **purchaseEnquiryId**: `bigint` = `protoInt64.zero`

The associated purchase enquiry

**`Generated`**

from field: uint64 purchase_enquiry_id = 22;

#### Defined in

[src/quotations_requests.scailo_pb.ts:2200](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2200)

___

### referenceId

• **referenceId**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the user-defined reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/quotations_requests.scailo_pb.ts:2177](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2177)

___

### sortKey

• **sortKey**: [`QUOTATION_REQUEST_SORT_KEY`](../enums/QUOTATION_REQUEST_SORT_KEY.md) = `QUOTATION_REQUEST_SORT_KEY.QUOTATION_REQUEST_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.QUOTATION_REQUEST_SORT_KEY sort_key = 5;

#### Defined in

[src/quotations_requests.scailo_pb.ts:1973](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1973)

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

[src/quotations_requests.scailo_pb.ts:1963](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L1963)

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

[src/quotations_requests.scailo_pb.ts:2065](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2065)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_requests.scailo_pb.ts:2239](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2239)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_requests.scailo_pb.ts:2237](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2237)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsRequestsServiceFilterReq"``

#### Defined in

[src/quotations_requests.scailo_pb.ts:2238](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2238)

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md) \| `PlainMessage`\<[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md) \| `PlainMessage`\<[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md) \| `PlainMessage`\<[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_requests.scailo_pb.ts:2277](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2277)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

#### Defined in

[src/quotations_requests.scailo_pb.ts:2265](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2265)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

#### Defined in

[src/quotations_requests.scailo_pb.ts:2269](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2269)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceFilterReq`](QuotationsRequestsServiceFilterReq.md)

#### Defined in

[src/quotations_requests.scailo_pb.ts:2273](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/quotations_requests.scailo_pb.ts#L2273)
