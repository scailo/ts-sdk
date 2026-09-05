[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceCountReq

# Class: SalesEnquiriesServiceCountReq

Target filter request for counting sales enquiry records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

**`Generated`**

from message Scailo.SalesEnquiriesServiceCountReq

## Hierarchy

- `Message`\<[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)\>

  ↳ **`SalesEnquiriesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](SalesEnquiriesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](SalesEnquiriesServiceCountReq.md#approvedonend)
- [approvedOnStart](SalesEnquiriesServiceCountReq.md#approvedonstart)
- [approverRoleId](SalesEnquiriesServiceCountReq.md#approverroleid)
- [buyerClientId](SalesEnquiriesServiceCountReq.md#buyerclientid)
- [completedOnEnd](SalesEnquiriesServiceCountReq.md#completedonend)
- [completedOnStart](SalesEnquiriesServiceCountReq.md#completedonstart)
- [consigneeClientId](SalesEnquiriesServiceCountReq.md#consigneeclientid)
- [creationTimestampEnd](SalesEnquiriesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](SalesEnquiriesServiceCountReq.md#creationtimestampstart)
- [currencyId](SalesEnquiriesServiceCountReq.md#currencyid)
- [deliveryDateEnd](SalesEnquiriesServiceCountReq.md#deliverydateend)
- [deliveryDateExact](SalesEnquiriesServiceCountReq.md#deliverydateexact)
- [deliveryDateStart](SalesEnquiriesServiceCountReq.md#deliverydatestart)
- [entityUuid](SalesEnquiriesServiceCountReq.md#entityuuid)
- [finalRefNumber](SalesEnquiriesServiceCountReq.md#finalrefnumber)
- [formData](SalesEnquiriesServiceCountReq.md#formdata)
- [isActive](SalesEnquiriesServiceCountReq.md#isactive)
- [modificationTimestampEnd](SalesEnquiriesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](SalesEnquiriesServiceCountReq.md#modificationtimestampstart)
- [referenceId](SalesEnquiriesServiceCountReq.md#referenceid)
- [status](SalesEnquiriesServiceCountReq.md#status)
- [fields](SalesEnquiriesServiceCountReq.md#fields)
- [runtime](SalesEnquiriesServiceCountReq.md#runtime)
- [typeName](SalesEnquiriesServiceCountReq.md#typename)

### Methods

- [clone](SalesEnquiriesServiceCountReq.md#clone)
- [equals](SalesEnquiriesServiceCountReq.md#equals)
- [fromBinary](SalesEnquiriesServiceCountReq.md#frombinary)
- [fromJson](SalesEnquiriesServiceCountReq.md#fromjson)
- [fromJsonString](SalesEnquiriesServiceCountReq.md#fromjsonstring)
- [getType](SalesEnquiriesServiceCountReq.md#gettype)
- [toBinary](SalesEnquiriesServiceCountReq.md#tobinary)
- [toJSON](SalesEnquiriesServiceCountReq.md#tojson)
- [toJson](SalesEnquiriesServiceCountReq.md#tojson-1)
- [toJsonString](SalesEnquiriesServiceCountReq.md#tojsonstring)
- [equals](SalesEnquiriesServiceCountReq.md#equals-1)
- [fromBinary](SalesEnquiriesServiceCountReq.md#frombinary-1)
- [fromJson](SalesEnquiriesServiceCountReq.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServiceCountReq**(`data?`): [`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)\> |

#### Returns

[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

#### Overrides

Message\&lt;SalesEnquiriesServiceCountReq\&gt;.constructor

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3312](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3312)

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

from field: optional uint64 approved_by_user_id = 13;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3124](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3124)

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

from field: optional uint64 approved_on_end = 12;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3108](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3108)

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

from field: optional uint64 approved_on_start = 11;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3092](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3092)

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

from field: optional uint64 approver_role_id = 14;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3140](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3140)

___

### buyerClientId

• `Optional` **buyerClientId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the prospective buyer client (the entity that would be financially responsible for the requested order).

**`Example`**

```ts
1051
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 buyer_client_id = 23;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3236](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3236)

___

### completedOnEnd

• `Optional` **completedOnEnd**: `bigint`

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

from field: optional uint64 completed_on_end = 16;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3172](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3172)

___

### completedOnStart

• `Optional` **completedOnStart**: `bigint`

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

from field: optional uint64 completed_on_start = 15;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3156](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3156)

___

### consigneeClientId

• `Optional` **consigneeClientId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the prospective consignee client (the entity inquiring about receiving the goods or services).

**`Example`**

```ts
1050
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 consignee_client_id = 22;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3220](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3220)

___

### creationTimestampEnd

• `Optional` **creationTimestampEnd**: `bigint`

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

from field: optional uint64 creation_timestamp_end = 102;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3016](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3016)

___

### creationTimestampStart

• `Optional` **creationTimestampStart**: `bigint`

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

from field: optional uint64 creation_timestamp_start = 101;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3000](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3000)

___

### currencyId

• `Optional` **currencyId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the currency associated with the enquiry, used to frame any prospective financial discussions or quotes.

**`Example`**

```ts
3
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 currency_id = 25;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3252](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3252)

___

### deliveryDateEnd

• `Optional` **deliveryDateEnd**: `string`

**`Optional`**

**`Description`**

Filter sales enquiries containing line items scheduled for delivery ON or BEFORE this specific date.

**`Example`**

```ts
"2023-11-30"
```

**`Regex`**

.*

**`Format`**

String following the standard date format (e.g., YYYY-MM-DD).

**`Generated`**

from field: optional string delivery_date_end = 43;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3300](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3300)

___

### deliveryDateExact

• `Optional` **deliveryDateExact**: `string`

**`Optional`**

**`Description`**

Filter sales enquiries containing line items scheduled for exact delivery on this specific date.

**`Example`**

```ts
"2023-11-15"
```

**`Regex`**

.*

**`Format`**

String following the standard date format (e.g., YYYY-MM-DD).

**`Generated`**

from field: optional string delivery_date_exact = 41;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3268](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3268)

___

### deliveryDateStart

• `Optional` **deliveryDateStart**: `string`

**`Optional`**

**`Description`**

Filter sales enquiries containing line items scheduled for delivery ON or AFTER this specific date.

**`Example`**

```ts
"2023-11-01"
```

**`Regex`**

.*

**`Format`**

String following the standard date format (e.g., YYYY-MM-DD).

**`Generated`**

from field: optional string delivery_date_start = 42;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3284](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3284)

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

from field: optional string entity_uuid = 8;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3064](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3064)

___

### finalRefNumber

• `Optional` **finalRefNumber**: `string`

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

from field: optional string final_ref_number = 21;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3204](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3204)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Count based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3310](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3310)

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

[src/sales_enquiries.scailo_pb.ts:2984](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2984)

___

### modificationTimestampEnd

• `Optional` **modificationTimestampEnd**: `bigint`

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

from field: optional uint64 modification_timestamp_end = 104;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3048](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3048)

___

### modificationTimestampStart

• `Optional` **modificationTimestampStart**: `bigint`

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

from field: optional uint64 modification_timestamp_start = 103;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3032](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3032)

___

### referenceId

• `Optional` **referenceId**: `string`

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

from field: optional string reference_id = 20;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3188](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3188)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3076](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3076)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3319](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3319)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3317](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3317)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiriesServiceCountReq"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3318](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3318)

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md) \| `PlainMessage`\<[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md) \| `PlainMessage`\<[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md) \| `PlainMessage`\<[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3356](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3356)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3344](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3344)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3348](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3348)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceCountReq`](SalesEnquiriesServiceCountReq.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3352](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L3352)
