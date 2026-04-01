[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServiceCountReq

# Class: PurchasesIndentsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.PurchasesIndentsServiceCountReq

## Hierarchy

- `Message`\<[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)\>

  ↳ **`PurchasesIndentsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](PurchasesIndentsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](PurchasesIndentsServiceCountReq.md#approvedonend)
- [approvedOnStart](PurchasesIndentsServiceCountReq.md#approvedonstart)
- [approverRoleId](PurchasesIndentsServiceCountReq.md#approverroleid)
- [completedOnEnd](PurchasesIndentsServiceCountReq.md#completedonend)
- [completedOnStart](PurchasesIndentsServiceCountReq.md#completedonstart)
- [consigneeLocationId](PurchasesIndentsServiceCountReq.md#consigneelocationid)
- [creationTimestampEnd](PurchasesIndentsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](PurchasesIndentsServiceCountReq.md#creationtimestampstart)
- [deliveryDateEnd](PurchasesIndentsServiceCountReq.md#deliverydateend)
- [deliveryDateExact](PurchasesIndentsServiceCountReq.md#deliverydateexact)
- [deliveryDateStart](PurchasesIndentsServiceCountReq.md#deliverydatestart)
- [entityUuid](PurchasesIndentsServiceCountReq.md#entityuuid)
- [familyId](PurchasesIndentsServiceCountReq.md#familyid)
- [finalRefNumber](PurchasesIndentsServiceCountReq.md#finalrefnumber)
- [formData](PurchasesIndentsServiceCountReq.md#formdata)
- [isActive](PurchasesIndentsServiceCountReq.md#isactive)
- [modificationTimestampEnd](PurchasesIndentsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](PurchasesIndentsServiceCountReq.md#modificationtimestampstart)
- [referenceId](PurchasesIndentsServiceCountReq.md#referenceid)
- [status](PurchasesIndentsServiceCountReq.md#status)
- [fields](PurchasesIndentsServiceCountReq.md#fields)
- [runtime](PurchasesIndentsServiceCountReq.md#runtime)
- [typeName](PurchasesIndentsServiceCountReq.md#typename)

### Methods

- [clone](PurchasesIndentsServiceCountReq.md#clone)
- [equals](PurchasesIndentsServiceCountReq.md#equals)
- [fromBinary](PurchasesIndentsServiceCountReq.md#frombinary)
- [fromJson](PurchasesIndentsServiceCountReq.md#fromjson)
- [fromJsonString](PurchasesIndentsServiceCountReq.md#fromjsonstring)
- [getType](PurchasesIndentsServiceCountReq.md#gettype)
- [toBinary](PurchasesIndentsServiceCountReq.md#tobinary)
- [toJSON](PurchasesIndentsServiceCountReq.md#tojson)
- [toJson](PurchasesIndentsServiceCountReq.md#tojson-1)
- [toJsonString](PurchasesIndentsServiceCountReq.md#tojsonstring)
- [equals](PurchasesIndentsServiceCountReq.md#equals-1)
- [fromBinary](PurchasesIndentsServiceCountReq.md#frombinary-1)
- [fromJson](PurchasesIndentsServiceCountReq.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServiceCountReq**(`data?`): [`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)\> |

#### Returns

[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

#### Overrides

Message\&lt;PurchasesIndentsServiceCountReq\&gt;.constructor

#### Defined in

[src/purchases_indents.scailo_pb.ts:2132](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2132)

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

[src/purchases_indents.scailo_pb.ts:2008](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2008)

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

[src/purchases_indents.scailo_pb.ts:1992](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L1992)

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

[src/purchases_indents.scailo_pb.ts:1976](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L1976)

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

[src/purchases_indents.scailo_pb.ts:2024](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2024)

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

[src/purchases_indents.scailo_pb.ts:2056](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2056)

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

[src/purchases_indents.scailo_pb.ts:2040](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2040)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 consignee_location_id = 22;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2116](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2116)

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

[src/purchases_indents.scailo_pb.ts:1900](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L1900)

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

[src/purchases_indents.scailo_pb.ts:1884](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L1884)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of any item in the purchase indent

**`Generated`**

from field: string delivery_date_end = 19;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2077](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2077)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of any item in the purchase indent

**`Generated`**

from field: string delivery_date_exact = 17;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2063](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2063)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of any item in the purchase indent

**`Generated`**

from field: string delivery_date_start = 18;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2070](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2070)

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

[src/purchases_indents.scailo_pb.ts:1948](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L1948)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2123](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2123)

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

[src/purchases_indents.scailo_pb.ts:2109](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2109)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2130](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2130)

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

[src/purchases_indents.scailo_pb.ts:1868](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L1868)

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

[src/purchases_indents.scailo_pb.ts:1932](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L1932)

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

[src/purchases_indents.scailo_pb.ts:1916](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L1916)

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

[src/purchases_indents.scailo_pb.ts:2093](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2093)

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

[src/purchases_indents.scailo_pb.ts:1960](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L1960)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents.scailo_pb.ts:2139](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2139)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents.scailo_pb.ts:2137](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2137)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesIndentsServiceCountReq"``

#### Defined in

[src/purchases_indents.scailo_pb.ts:2138](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2138)

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md) \| `PlainMessage`\<[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md) \| `PlainMessage`\<[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md) \| `PlainMessage`\<[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents.scailo_pb.ts:2175](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2175)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:2163](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2163)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:2167](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2167)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceCountReq`](PurchasesIndentsServiceCountReq.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:2171](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_indents.scailo_pb.ts#L2171)
