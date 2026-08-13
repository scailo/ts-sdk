[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServiceFilterReq

# Class: PurchasesIndentsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.PurchasesIndentsServiceFilterReq

## Hierarchy

- `Message`\<[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)\>

  ↳ **`PurchasesIndentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](PurchasesIndentsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](PurchasesIndentsServiceFilterReq.md#approvedonend)
- [approvedOnStart](PurchasesIndentsServiceFilterReq.md#approvedonstart)
- [approverRoleId](PurchasesIndentsServiceFilterReq.md#approverroleid)
- [completedOnEnd](PurchasesIndentsServiceFilterReq.md#completedonend)
- [completedOnStart](PurchasesIndentsServiceFilterReq.md#completedonstart)
- [consigneeLocationId](PurchasesIndentsServiceFilterReq.md#consigneelocationid)
- [count](PurchasesIndentsServiceFilterReq.md#count)
- [creationTimestampEnd](PurchasesIndentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](PurchasesIndentsServiceFilterReq.md#creationtimestampstart)
- [deliveryDateEnd](PurchasesIndentsServiceFilterReq.md#deliverydateend)
- [deliveryDateExact](PurchasesIndentsServiceFilterReq.md#deliverydateexact)
- [deliveryDateStart](PurchasesIndentsServiceFilterReq.md#deliverydatestart)
- [entityUuid](PurchasesIndentsServiceFilterReq.md#entityuuid)
- [familyId](PurchasesIndentsServiceFilterReq.md#familyid)
- [finalRefNumber](PurchasesIndentsServiceFilterReq.md#finalrefnumber)
- [formData](PurchasesIndentsServiceFilterReq.md#formdata)
- [includeFormData](PurchasesIndentsServiceFilterReq.md#includeformdata)
- [isActive](PurchasesIndentsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](PurchasesIndentsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](PurchasesIndentsServiceFilterReq.md#modificationtimestampstart)
- [offset](PurchasesIndentsServiceFilterReq.md#offset)
- [referenceId](PurchasesIndentsServiceFilterReq.md#referenceid)
- [sortKey](PurchasesIndentsServiceFilterReq.md#sortkey)
- [sortOrder](PurchasesIndentsServiceFilterReq.md#sortorder)
- [status](PurchasesIndentsServiceFilterReq.md#status)
- [fields](PurchasesIndentsServiceFilterReq.md#fields)
- [runtime](PurchasesIndentsServiceFilterReq.md#runtime)
- [typeName](PurchasesIndentsServiceFilterReq.md#typename)

### Methods

- [clone](PurchasesIndentsServiceFilterReq.md#clone)
- [equals](PurchasesIndentsServiceFilterReq.md#equals)
- [fromBinary](PurchasesIndentsServiceFilterReq.md#frombinary)
- [fromJson](PurchasesIndentsServiceFilterReq.md#fromjson)
- [fromJsonString](PurchasesIndentsServiceFilterReq.md#fromjsonstring)
- [getType](PurchasesIndentsServiceFilterReq.md#gettype)
- [toBinary](PurchasesIndentsServiceFilterReq.md#tobinary)
- [toJSON](PurchasesIndentsServiceFilterReq.md#tojson)
- [toJson](PurchasesIndentsServiceFilterReq.md#tojson-1)
- [toJsonString](PurchasesIndentsServiceFilterReq.md#tojsonstring)
- [equals](PurchasesIndentsServiceFilterReq.md#equals-1)
- [fromBinary](PurchasesIndentsServiceFilterReq.md#frombinary-1)
- [fromJson](PurchasesIndentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServiceFilterReq**(`data?`): [`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)\> |

#### Returns

[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

#### Overrides

Message\&lt;PurchasesIndentsServiceFilterReq\&gt;.constructor

#### Defined in

[src/purchases_indents.scailo_pb.ts:1906](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1906)

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

[src/purchases_indents.scailo_pb.ts:1766](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1766)

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

[src/purchases_indents.scailo_pb.ts:1750](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1750)

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

[src/purchases_indents.scailo_pb.ts:1734](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1734)

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

[src/purchases_indents.scailo_pb.ts:1782](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1782)

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

[src/purchases_indents.scailo_pb.ts:1814](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1814)

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

[src/purchases_indents.scailo_pb.ts:1798](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1798)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 consignee_location_id = 22;

#### Defined in

[src/purchases_indents.scailo_pb.ts:1874](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1874)

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

[src/purchases_indents.scailo_pb.ts:1588](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1588)

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

[src/purchases_indents.scailo_pb.ts:1658](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1658)

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

[src/purchases_indents.scailo_pb.ts:1642](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1642)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of any item in the purchase indent

**`Generated`**

from field: string delivery_date_end = 19;

#### Defined in

[src/purchases_indents.scailo_pb.ts:1835](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1835)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of any item in the purchase indent

**`Generated`**

from field: string delivery_date_exact = 17;

#### Defined in

[src/purchases_indents.scailo_pb.ts:1821](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1821)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of any item in the purchase indent

**`Generated`**

from field: string delivery_date_start = 18;

#### Defined in

[src/purchases_indents.scailo_pb.ts:1828](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1828)

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

[src/purchases_indents.scailo_pb.ts:1706](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1706)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/purchases_indents.scailo_pb.ts:1881](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1881)

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

[src/purchases_indents.scailo_pb.ts:1867](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1867)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Filter based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/purchases_indents.scailo_pb.ts:1891](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1891)

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

[src/purchases_indents.scailo_pb.ts:1904](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1904)

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

[src/purchases_indents.scailo_pb.ts:1572](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1572)

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

[src/purchases_indents.scailo_pb.ts:1690](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1690)

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

[src/purchases_indents.scailo_pb.ts:1674](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1674)

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

[src/purchases_indents.scailo_pb.ts:1604](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1604)

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

[src/purchases_indents.scailo_pb.ts:1851](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1851)

___

### sortKey

• **sortKey**: [`PURCHASE_INDENT_SORT_KEY`](../enums/PURCHASE_INDENT_SORT_KEY.md) = `PURCHASE_INDENT_SORT_KEY.PURCHASE_INDENT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.PURCHASE_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_indents.scailo_pb.ts:1626](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1626)

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

[src/purchases_indents.scailo_pb.ts:1616](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1616)

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

[src/purchases_indents.scailo_pb.ts:1718](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1718)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents.scailo_pb.ts:1913](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1913)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents.scailo_pb.ts:1911](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1911)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesIndentsServiceFilterReq"``

#### Defined in

[src/purchases_indents.scailo_pb.ts:1912](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1912)

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents.scailo_pb.ts:1954](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1954)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:1942](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1942)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:1946](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1946)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceFilterReq`](PurchasesIndentsServiceFilterReq.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:1950](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_indents.scailo_pb.ts#L1950)
