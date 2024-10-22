[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkflowsRulesServiceFilterReq

# Class: WorkflowsRulesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.WorkflowsRulesServiceFilterReq

## Hierarchy

- `Message`\<[`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md)\>

  ↳ **`WorkflowsRulesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](WorkflowsRulesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](WorkflowsRulesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](WorkflowsRulesServiceFilterReq.md#approvedonend)
- [approvedOnStart](WorkflowsRulesServiceFilterReq.md#approvedonstart)
- [approverRoleId](WorkflowsRulesServiceFilterReq.md#approverroleid)
- [code](WorkflowsRulesServiceFilterReq.md#code)
- [completedOnEnd](WorkflowsRulesServiceFilterReq.md#completedonend)
- [completedOnStart](WorkflowsRulesServiceFilterReq.md#completedonstart)
- [count](WorkflowsRulesServiceFilterReq.md#count)
- [creationTimestampEnd](WorkflowsRulesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](WorkflowsRulesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](WorkflowsRulesServiceFilterReq.md#entityuuid)
- [executeOn](WorkflowsRulesServiceFilterReq.md#executeon)
- [isActive](WorkflowsRulesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](WorkflowsRulesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](WorkflowsRulesServiceFilterReq.md#modificationtimestampstart)
- [moment](WorkflowsRulesServiceFilterReq.md#moment)
- [name](WorkflowsRulesServiceFilterReq.md#name)
- [notifyUserId](WorkflowsRulesServiceFilterReq.md#notifyuserid)
- [offset](WorkflowsRulesServiceFilterReq.md#offset)
- [recordStatus](WorkflowsRulesServiceFilterReq.md#recordstatus)
- [serviceName](WorkflowsRulesServiceFilterReq.md#servicename)
- [sortKey](WorkflowsRulesServiceFilterReq.md#sortkey)
- [sortOrder](WorkflowsRulesServiceFilterReq.md#sortorder)
- [status](WorkflowsRulesServiceFilterReq.md#status)
- [fields](WorkflowsRulesServiceFilterReq.md#fields)
- [runtime](WorkflowsRulesServiceFilterReq.md#runtime)
- [typeName](WorkflowsRulesServiceFilterReq.md#typename)

### Methods

- [clone](WorkflowsRulesServiceFilterReq.md#clone)
- [equals](WorkflowsRulesServiceFilterReq.md#equals)
- [fromBinary](WorkflowsRulesServiceFilterReq.md#frombinary)
- [fromJson](WorkflowsRulesServiceFilterReq.md#fromjson)
- [fromJsonString](WorkflowsRulesServiceFilterReq.md#fromjsonstring)
- [getType](WorkflowsRulesServiceFilterReq.md#gettype)
- [toBinary](WorkflowsRulesServiceFilterReq.md#tobinary)
- [toJSON](WorkflowsRulesServiceFilterReq.md#tojson)
- [toJson](WorkflowsRulesServiceFilterReq.md#tojson-1)
- [toJsonString](WorkflowsRulesServiceFilterReq.md#tojsonstring)
- [equals](WorkflowsRulesServiceFilterReq.md#equals-1)
- [fromBinary](WorkflowsRulesServiceFilterReq.md#frombinary-1)
- [fromJson](WorkflowsRulesServiceFilterReq.md#fromjson-1)
- [fromJsonString](WorkflowsRulesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkflowsRulesServiceFilterReq**(`data?`): [`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md)\> |

#### Returns

[`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md)

#### Overrides

Message\&lt;WorkflowsRulesServiceFilterReq\&gt;.constructor

#### Defined in

src/workflows_rules.scailo_pb.ts:1577

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/workflows_rules.scailo_pb.ts:1505

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/workflows_rules.scailo_pb.ts:1498

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/workflows_rules.scailo_pb.ts:1491

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/workflows_rules.scailo_pb.ts:1512

___

### code

• **code**: `string` = `""`

The code of the workflow rule

**`Generated`**

from field: string code = 21;

#### Defined in

src/workflows_rules.scailo_pb.ts:1540

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/workflows_rules.scailo_pb.ts:1526

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/workflows_rules.scailo_pb.ts:1519

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/workflows_rules.scailo_pb.ts:1421

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/workflows_rules.scailo_pb.ts:1456

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/workflows_rules.scailo_pb.ts:1449

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/workflows_rules.scailo_pb.ts:1477

___

### executeOn

• **executeOn**: [`WORKFLOW_RULE_EXECUTE_ON`](../enums/WORKFLOW_RULE_EXECUTE_ON.md) = `WORKFLOW_RULE_EXECUTE_ON.WORKFLOW_RULE_EXECUTE_ON_ANY_UNSPECIFIED`

Stores the value for when the rule should be triggered

**`Generated`**

from field: Scailo.WORKFLOW_RULE_EXECUTE_ON execute_on = 33;

#### Defined in

src/workflows_rules.scailo_pb.ts:1575

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/workflows_rules.scailo_pb.ts:1414

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/workflows_rules.scailo_pb.ts:1470

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/workflows_rules.scailo_pb.ts:1463

___

### moment

• **moment**: [`WORKFLOW_RULE_MOMENT`](../enums/WORKFLOW_RULE_MOMENT.md) = `WORKFLOW_RULE_MOMENT.WORKFLOW_RULE_MOMENT_ANY_UNSPECIFIED`

Stores the moment at which the rule should be triggered

**`Generated`**

from field: Scailo.WORKFLOW_RULE_MOMENT moment = 32;

#### Defined in

src/workflows_rules.scailo_pb.ts:1568

___

### name

• **name**: `string` = `""`

The name of the workflow rule

**`Generated`**

from field: string name = 20;

#### Defined in

src/workflows_rules.scailo_pb.ts:1533

___

### notifyUserId

• **notifyUserId**: `bigint` = `protoInt64.zero`

The ID of the user who is being notified

**`Generated`**

from field: uint64 notify_user_id = 22;

#### Defined in

src/workflows_rules.scailo_pb.ts:1547

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/workflows_rules.scailo_pb.ts:1428

___

### recordStatus

• **recordStatus**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Stores the status of the record. The rule is triggered when the status is reached.

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS record_status = 31;

#### Defined in

src/workflows_rules.scailo_pb.ts:1561

___

### serviceName

• **serviceName**: [`WORKFLOW_RULE_SERVICE_NAME`](../enums/WORKFLOW_RULE_SERVICE_NAME.md) = `WORKFLOW_RULE_SERVICE_NAME.WORKFLOW_RULE_SERVICE_NAME_ANY_UNSPECIFIED`

The name of the service for which this rule is applicable for

**`Generated`**

from field: Scailo.WORKFLOW_RULE_SERVICE_NAME service_name = 30;

#### Defined in

src/workflows_rules.scailo_pb.ts:1554

___

### sortKey

• **sortKey**: [`WORKFLOW_RULE_SORT_KEY`](../enums/WORKFLOW_RULE_SORT_KEY.md) = `WORKFLOW_RULE_SORT_KEY.WORKFLOW_RULE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.WORKFLOW_RULE_SORT_KEY sort_key = 5;

#### Defined in

src/workflows_rules.scailo_pb.ts:1442

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/workflows_rules.scailo_pb.ts:1435

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this workflow rule

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/workflows_rules.scailo_pb.ts:1484

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/workflows_rules.scailo_pb.ts:1584

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/workflows_rules.scailo_pb.ts:1582

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkflowsRulesServiceFilterReq"``

#### Defined in

src/workflows_rules.scailo_pb.ts:1583

## Methods

### clone

▸ **clone**(): [`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md) \| `PlainMessage`\<[`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md) \| `PlainMessage`\<[`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md) \| `PlainMessage`\<[`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/workflows_rules.scailo_pb.ts:1623

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md)

#### Defined in

src/workflows_rules.scailo_pb.ts:1611

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md)

#### Defined in

src/workflows_rules.scailo_pb.ts:1615

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkflowsRulesServiceFilterReq`](WorkflowsRulesServiceFilterReq.md)

#### Defined in

src/workflows_rules.scailo_pb.ts:1619
