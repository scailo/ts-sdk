[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesEnquiriesServiceFilterReq

# Class: PurchasesEnquiriesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.PurchasesEnquiriesServiceFilterReq

## Hierarchy

- `Message`\<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\>

  ↳ **`PurchasesEnquiriesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](PurchasesEnquiriesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](PurchasesEnquiriesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](PurchasesEnquiriesServiceFilterReq.md#approvedonend)
- [approvedOnStart](PurchasesEnquiriesServiceFilterReq.md#approvedonstart)
- [approverRoleId](PurchasesEnquiriesServiceFilterReq.md#approverroleid)
- [completedOnEnd](PurchasesEnquiriesServiceFilterReq.md#completedonend)
- [completedOnStart](PurchasesEnquiriesServiceFilterReq.md#completedonstart)
- [count](PurchasesEnquiriesServiceFilterReq.md#count)
- [creationTimestampEnd](PurchasesEnquiriesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](PurchasesEnquiriesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](PurchasesEnquiriesServiceFilterReq.md#entityuuid)
- [finalRefNumber](PurchasesEnquiriesServiceFilterReq.md#finalrefnumber)
- [formData](PurchasesEnquiriesServiceFilterReq.md#formdata)
- [isActive](PurchasesEnquiriesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](PurchasesEnquiriesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](PurchasesEnquiriesServiceFilterReq.md#modificationtimestampstart)
- [offset](PurchasesEnquiriesServiceFilterReq.md#offset)
- [priority](PurchasesEnquiriesServiceFilterReq.md#priority)
- [referenceId](PurchasesEnquiriesServiceFilterReq.md#referenceid)
- [sortKey](PurchasesEnquiriesServiceFilterReq.md#sortkey)
- [sortOrder](PurchasesEnquiriesServiceFilterReq.md#sortorder)
- [status](PurchasesEnquiriesServiceFilterReq.md#status)
- [fields](PurchasesEnquiriesServiceFilterReq.md#fields)
- [runtime](PurchasesEnquiriesServiceFilterReq.md#runtime)
- [typeName](PurchasesEnquiriesServiceFilterReq.md#typename)

### Methods

- [clone](PurchasesEnquiriesServiceFilterReq.md#clone)
- [equals](PurchasesEnquiriesServiceFilterReq.md#equals)
- [fromBinary](PurchasesEnquiriesServiceFilterReq.md#frombinary)
- [fromJson](PurchasesEnquiriesServiceFilterReq.md#fromjson)
- [fromJsonString](PurchasesEnquiriesServiceFilterReq.md#fromjsonstring)
- [getType](PurchasesEnquiriesServiceFilterReq.md#gettype)
- [toBinary](PurchasesEnquiriesServiceFilterReq.md#tobinary)
- [toJSON](PurchasesEnquiriesServiceFilterReq.md#tojson)
- [toJson](PurchasesEnquiriesServiceFilterReq.md#tojson-1)
- [toJsonString](PurchasesEnquiriesServiceFilterReq.md#tojsonstring)
- [equals](PurchasesEnquiriesServiceFilterReq.md#equals-1)
- [fromBinary](PurchasesEnquiriesServiceFilterReq.md#frombinary-1)
- [fromJson](PurchasesEnquiriesServiceFilterReq.md#fromjson-1)
- [fromJsonString](PurchasesEnquiriesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesEnquiriesServiceFilterReq**(`data?`): [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\> |

#### Returns

[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Overrides

Message\&lt;PurchasesEnquiriesServiceFilterReq\&gt;.constructor

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1839](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1839)

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

[src/purchases_enquiries.scailo_pb.ts:1743](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1743)

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

[src/purchases_enquiries.scailo_pb.ts:1727](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1727)

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

[src/purchases_enquiries.scailo_pb.ts:1711](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1711)

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

[src/purchases_enquiries.scailo_pb.ts:1759](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1759)

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

[src/purchases_enquiries.scailo_pb.ts:1791](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1791)

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

[src/purchases_enquiries.scailo_pb.ts:1775](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1775)

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

[src/purchases_enquiries.scailo_pb.ts:1565](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1565)

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

[src/purchases_enquiries.scailo_pb.ts:1635](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1635)

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

[src/purchases_enquiries.scailo_pb.ts:1619](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1619)

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

[src/purchases_enquiries.scailo_pb.ts:1683](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1683)

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

[src/purchases_enquiries.scailo_pb.ts:1823](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1823)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1837](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1837)

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

[src/purchases_enquiries.scailo_pb.ts:1549](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1549)

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

[src/purchases_enquiries.scailo_pb.ts:1667](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1667)

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

[src/purchases_enquiries.scailo_pb.ts:1651](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1651)

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

[src/purchases_enquiries.scailo_pb.ts:1581](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1581)

___

### priority

• **priority**: `string` = `""`

The priority of the purchase enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 24;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1830](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1830)

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

[src/purchases_enquiries.scailo_pb.ts:1807](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1807)

___

### sortKey

• **sortKey**: [`PURCHASE_ENQUIRY_SORT_KEY`](../enums/PURCHASE_ENQUIRY_SORT_KEY.md) = `PURCHASE_ENQUIRY_SORT_KEY.PURCHASE_ENQUIRY_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.PURCHASE_ENQUIRY_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1603](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1603)

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

[src/purchases_enquiries.scailo_pb.ts:1593](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1593)

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

[src/purchases_enquiries.scailo_pb.ts:1695](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1695)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1846](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1846)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1844](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1844)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesEnquiriesServiceFilterReq"``

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1845](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1845)

## Methods

### clone

▸ **clone**(): [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1882](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1882)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1870](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1870)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1874](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1874)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceFilterReq`](PurchasesEnquiriesServiceFilterReq.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1878](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_enquiries.scailo_pb.ts#L1878)
