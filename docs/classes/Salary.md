[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Salary

# Class: Salary

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Salary

## Hierarchy

- `Message`\<[`Salary`](Salary.md)\>

  ↳ **`Salary`**

## Table of contents

### Constructors

- [constructor](Salary.md#constructor)

### Properties

- [additionItemsList](Salary.md#additionitemslist)
- [applicableAttendanceRecordsCount](Salary.md#applicableattendancerecordscount)
- [applicableAttendanceUomId](Salary.md#applicableattendanceuomid)
- [approvalMetadata](Salary.md#approvalmetadata)
- [bankAccountId](Salary.md#bankaccountid)
- [basicPayAmount](Salary.md#basicpayamount)
- [basicPayUomId](Salary.md#basicpayuomid)
- [cfFromAttendanceUomIdToBasicPayUomIdDenominator](Salary.md#cffromattendanceuomidtobasicpayuomiddenominator)
- [cfFromAttendanceUomIdToBasicPayUomIdNumerator](Salary.md#cffromattendanceuomidtobasicpayuomidnumerator)
- [completedOn](Salary.md#completedon)
- [currencyId](Salary.md#currencyid)
- [deductionItemsList](Salary.md#deductionitemslist)
- [description](Salary.md#description)
- [employeeId](Salary.md#employeeid)
- [entityUuid](Salary.md#entityuuid)
- [finalRefNumber](Salary.md#finalrefnumber)
- [formData](Salary.md#formdata)
- [fromDate](Salary.md#fromdate)
- [logs](Salary.md#logs)
- [metadata](Salary.md#metadata)
- [payrollGroupId](Salary.md#payrollgroupid)
- [referenceId](Salary.md#referenceid)
- [reimbursementItemsList](Salary.md#reimbursementitemslist)
- [roundOff](Salary.md#roundoff)
- [status](Salary.md#status)
- [taxGroupId](Salary.md#taxgroupid)
- [toDate](Salary.md#todate)
- [totalAmount](Salary.md#totalamount)
- [vaultFolderId](Salary.md#vaultfolderid)
- [fields](Salary.md#fields)
- [runtime](Salary.md#runtime)
- [typeName](Salary.md#typename)

### Methods

- [clone](Salary.md#clone)
- [equals](Salary.md#equals)
- [fromBinary](Salary.md#frombinary)
- [fromJson](Salary.md#fromjson)
- [fromJsonString](Salary.md#fromjsonstring)
- [getType](Salary.md#gettype)
- [toBinary](Salary.md#tobinary)
- [toJSON](Salary.md#tojson)
- [toJson](Salary.md#tojson-1)
- [toJsonString](Salary.md#tojsonstring)
- [equals](Salary.md#equals-1)
- [fromBinary](Salary.md#frombinary-1)
- [fromJson](Salary.md#fromjson-1)
- [fromJsonString](Salary.md#fromjsonstring-1)

## Constructors

### constructor

• **new Salary**(`data?`): [`Salary`](Salary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Salary`](Salary.md)\> |

#### Returns

[`Salary`](Salary.md)

#### Overrides

Message\&lt;Salary\&gt;.constructor

#### Defined in

[src/salaries.scailo_pb.ts:782](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L782)

## Properties

### additionItemsList

• **additionItemsList**: [`SalaryAdditionItem`](SalaryAdditionItem.md)[] = `[]`

The list of associated addition items

**`Generated`**

from field: repeated Scailo.SalaryAdditionItem addition_items_list = 40;

#### Defined in

[src/salaries.scailo_pb.ts:752](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L752)

___

### applicableAttendanceRecordsCount

• **applicableAttendanceRecordsCount**: `bigint` = `protoInt64.zero`

The number of attendance records being considered

**`Generated`**

from field: int64 applicable_attendance_records_count = 19;

#### Defined in

[src/salaries.scailo_pb.ts:696](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L696)

___

### applicableAttendanceUomId

• **applicableAttendanceUomId**: `bigint` = `protoInt64.zero`

The unit of attendance

**`Generated`**

from field: int64 applicable_attendance_uom_id = 20;

#### Defined in

[src/salaries.scailo_pb.ts:703](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L703)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/salaries.scailo_pb.ts:598](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L598)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The ID of the bank account (belonging to the organization) from which the salary will be debited

**`Generated`**

from field: int64 bank_account_id = 15;

#### Defined in

[src/salaries.scailo_pb.ts:668](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L668)

___

### basicPayAmount

• **basicPayAmount**: `bigint` = `protoInt64.zero`

The basic pay amount

**`Generated`**

from field: int64 basic_pay_amount = 17;

#### Defined in

[src/salaries.scailo_pb.ts:682](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L682)

___

### basicPayUomId

• **basicPayUomId**: `bigint` = `protoInt64.zero`

The unit of the basic pay

**`Generated`**

from field: int64 basic_pay_uom_id = 18;

#### Defined in

[src/salaries.scailo_pb.ts:689](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L689)

___

### cfFromAttendanceUomIdToBasicPayUomIdDenominator

• **cfFromAttendanceUomIdToBasicPayUomIdDenominator**: `bigint` = `protoInt64.zero`

The denominator for the conversion factor from attendance unit to basic pay unit

**`Generated`**

from field: int64 cf_from_attendance_uom_id_to_basic_pay_uom_id_denominator = 22;

#### Defined in

[src/salaries.scailo_pb.ts:717](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L717)

___

### cfFromAttendanceUomIdToBasicPayUomIdNumerator

• **cfFromAttendanceUomIdToBasicPayUomIdNumerator**: `bigint` = `protoInt64.zero`

The numerator for the conversion factor from attendance unit to basic pay unit

**`Generated`**

from field: int64 cf_from_attendance_uom_id_to_basic_pay_uom_id_numerator = 21;

#### Defined in

[src/salaries.scailo_pb.ts:710](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L710)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this salary was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/salaries.scailo_pb.ts:619](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L619)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: int64 currency_id = 16;

#### Defined in

[src/salaries.scailo_pb.ts:675](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L675)

___

### deductionItemsList

• **deductionItemsList**: [`SalaryDeductionItem`](SalaryDeductionItem.md)[] = `[]`

The list of associated deduction items

**`Generated`**

from field: repeated Scailo.SalaryDeductionItem deduction_items_list = 41;

#### Defined in

[src/salaries.scailo_pb.ts:759](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L759)

___

### description

• **description**: `string` = `""`

Any additional description

**`Generated`**

from field: string description = 25;

#### Defined in

[src/salaries.scailo_pb.ts:738](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L738)

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

The ID of the associated employee

**`Generated`**

from field: int64 employee_id = 12;

#### Defined in

[src/salaries.scailo_pb.ts:647](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L647)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/salaries.scailo_pb.ts:584](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L584)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/salaries.scailo_pb.ts:640](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L640)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 50;

#### Defined in

[src/salaries.scailo_pb.ts:773](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L773)

___

### fromDate

• **fromDate**: `string` = `""`

The date from which the salary is being calculated

**`Generated`**

from field: string from_date = 13;

#### Defined in

[src/salaries.scailo_pb.ts:654](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L654)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this salary

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/salaries.scailo_pb.ts:612](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L612)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this salary

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/salaries.scailo_pb.ts:591](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L591)

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated payroll group

**`Generated`**

from field: int64 payroll_group_id = 23;

#### Defined in

[src/salaries.scailo_pb.ts:724](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L724)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the salary

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/salaries.scailo_pb.ts:633](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L633)

___

### reimbursementItemsList

• **reimbursementItemsList**: [`SalaryReimbursementItem`](SalaryReimbursementItem.md)[] = `[]`

The list of associated reimbursement items

**`Generated`**

from field: repeated Scailo.SalaryReimbursementItem reimbursement_items_list = 42;

#### Defined in

[src/salaries.scailo_pb.ts:766](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L766)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

Stores any roundoff amount

**`Generated`**

from field: int64 round_off = 30;

#### Defined in

[src/salaries.scailo_pb.ts:745](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L745)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this salary

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/salaries.scailo_pb.ts:605](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L605)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: int64 tax_group_id = 24;

#### Defined in

[src/salaries.scailo_pb.ts:731](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L731)

___

### toDate

• **toDate**: `string` = `""`

The date until which the salary is being calculated

**`Generated`**

from field: string to_date = 14;

#### Defined in

[src/salaries.scailo_pb.ts:661](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L661)

___

### totalAmount

• **totalAmount**: `number` = `0`

The total amount of the salary

**`Generated`**

from field: double total_amount = 60;

#### Defined in

[src/salaries.scailo_pb.ts:780](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L780)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/salaries.scailo_pb.ts:626](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L626)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/salaries.scailo_pb.ts:789](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L789)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/salaries.scailo_pb.ts:787](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L787)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Salary"``

#### Defined in

[src/salaries.scailo_pb.ts:788](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L788)

## Methods

### clone

▸ **clone**(): [`Salary`](Salary.md)

Create a deep copy.

#### Returns

[`Salary`](Salary.md)

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
| `other` | `undefined` \| ``null`` \| [`Salary`](Salary.md) \| `PlainMessage`\<[`Salary`](Salary.md)\> |

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

▸ **getType**(): `MessageType`\<[`Salary`](Salary.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Salary`](Salary.md)\>

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
| `a` | `undefined` \| [`Salary`](Salary.md) \| `PlainMessage`\<[`Salary`](Salary.md)\> |
| `b` | `undefined` \| [`Salary`](Salary.md) \| `PlainMessage`\<[`Salary`](Salary.md)\> |

#### Returns

`boolean`

#### Defined in

[src/salaries.scailo_pb.ts:833](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L833)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Salary`](Salary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Salary`](Salary.md)

#### Defined in

[src/salaries.scailo_pb.ts:821](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L821)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Salary`](Salary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Salary`](Salary.md)

#### Defined in

[src/salaries.scailo_pb.ts:825](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L825)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Salary`](Salary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Salary`](Salary.md)

#### Defined in

[src/salaries.scailo_pb.ts:829](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/salaries.scailo_pb.ts#L829)
