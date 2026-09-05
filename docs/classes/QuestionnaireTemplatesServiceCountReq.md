[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireTemplatesServiceCountReq

# Class: QuestionnaireTemplatesServiceCountReq

Target filter request for counting questionnaire template records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

**`Generated`**

from message Scailo.QuestionnaireTemplatesServiceCountReq

## Hierarchy

- `Message`\<[`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md)\>

  ↳ **`QuestionnaireTemplatesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](QuestionnaireTemplatesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](QuestionnaireTemplatesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](QuestionnaireTemplatesServiceCountReq.md#approvedonend)
- [approvedOnStart](QuestionnaireTemplatesServiceCountReq.md#approvedonstart)
- [approverRoleId](QuestionnaireTemplatesServiceCountReq.md#approverroleid)
- [completedOnEnd](QuestionnaireTemplatesServiceCountReq.md#completedonend)
- [completedOnStart](QuestionnaireTemplatesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](QuestionnaireTemplatesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](QuestionnaireTemplatesServiceCountReq.md#creationtimestampstart)
- [entityUuid](QuestionnaireTemplatesServiceCountReq.md#entityuuid)
- [finalRefNumber](QuestionnaireTemplatesServiceCountReq.md#finalrefnumber)
- [formData](QuestionnaireTemplatesServiceCountReq.md#formdata)
- [isActive](QuestionnaireTemplatesServiceCountReq.md#isactive)
- [modificationTimestampEnd](QuestionnaireTemplatesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](QuestionnaireTemplatesServiceCountReq.md#modificationtimestampstart)
- [referenceId](QuestionnaireTemplatesServiceCountReq.md#referenceid)
- [status](QuestionnaireTemplatesServiceCountReq.md#status)
- [validFromEnd](QuestionnaireTemplatesServiceCountReq.md#validfromend)
- [validFromStart](QuestionnaireTemplatesServiceCountReq.md#validfromstart)
- [validToEnd](QuestionnaireTemplatesServiceCountReq.md#validtoend)
- [validToStart](QuestionnaireTemplatesServiceCountReq.md#validtostart)
- [fields](QuestionnaireTemplatesServiceCountReq.md#fields)
- [runtime](QuestionnaireTemplatesServiceCountReq.md#runtime)
- [typeName](QuestionnaireTemplatesServiceCountReq.md#typename)

### Methods

- [clone](QuestionnaireTemplatesServiceCountReq.md#clone)
- [equals](QuestionnaireTemplatesServiceCountReq.md#equals)
- [fromBinary](QuestionnaireTemplatesServiceCountReq.md#frombinary)
- [fromJson](QuestionnaireTemplatesServiceCountReq.md#fromjson)
- [fromJsonString](QuestionnaireTemplatesServiceCountReq.md#fromjsonstring)
- [getType](QuestionnaireTemplatesServiceCountReq.md#gettype)
- [toBinary](QuestionnaireTemplatesServiceCountReq.md#tobinary)
- [toJSON](QuestionnaireTemplatesServiceCountReq.md#tojson)
- [toJson](QuestionnaireTemplatesServiceCountReq.md#tojson-1)
- [toJsonString](QuestionnaireTemplatesServiceCountReq.md#tojsonstring)
- [equals](QuestionnaireTemplatesServiceCountReq.md#equals-1)
- [fromBinary](QuestionnaireTemplatesServiceCountReq.md#frombinary-1)
- [fromJson](QuestionnaireTemplatesServiceCountReq.md#fromjson-1)
- [fromJsonString](QuestionnaireTemplatesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireTemplatesServiceCountReq**(`data?`): [`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md)\> |

#### Returns

[`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md)

#### Overrides

Message\&lt;QuestionnaireTemplatesServiceCountReq\&gt;.constructor

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1629](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1629)

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

[src/questionnaire_templates.scailo_pb.ts:1473](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1473)

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

[src/questionnaire_templates.scailo_pb.ts:1457](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1457)

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

[src/questionnaire_templates.scailo_pb.ts:1441](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1441)

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

[src/questionnaire_templates.scailo_pb.ts:1489](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1489)

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

[src/questionnaire_templates.scailo_pb.ts:1521](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1521)

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

[src/questionnaire_templates.scailo_pb.ts:1505](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1505)

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

[src/questionnaire_templates.scailo_pb.ts:1365](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1365)

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

[src/questionnaire_templates.scailo_pb.ts:1349](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1349)

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

[src/questionnaire_templates.scailo_pb.ts:1413](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1413)

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

[src/questionnaire_templates.scailo_pb.ts:1553](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1553)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Count based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1627](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1627)

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

[src/questionnaire_templates.scailo_pb.ts:1333](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1333)

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

[src/questionnaire_templates.scailo_pb.ts:1397](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1397)

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

[src/questionnaire_templates.scailo_pb.ts:1381](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1381)

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

[src/questionnaire_templates.scailo_pb.ts:1537](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1537)

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

[src/questionnaire_templates.scailo_pb.ts:1425](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1425)

___

### validFromEnd

• `Optional` **validFromEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records that become active (valid from) ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 valid_from_end = 31;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1585](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1585)

___

### validFromStart

• `Optional` **validFromStart**: `bigint`

**`Optional`**

**`Description`**

Filter records that become active (valid from) ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 valid_from_start = 30;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1569](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1569)

___

### validToEnd

• `Optional` **validToEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records that expire (valid to) ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 valid_to_end = 34;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1617](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1617)

___

### validToStart

• `Optional` **validToStart**: `bigint`

**`Optional`**

**`Description`**

Filter records that expire (valid to) ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 valid_to_start = 33;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1601](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1601)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1636](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1636)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1634](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1634)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireTemplatesServiceCountReq"``

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1635](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1635)

## Methods

### clone

▸ **clone**(): [`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md)

Create a deep copy.

#### Returns

[`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md)\> |
| `b` | `undefined` \| [`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1671](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1671)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1659](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1659)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1663](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1663)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServiceCountReq`](QuestionnaireTemplatesServiceCountReq.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1667](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L1667)
