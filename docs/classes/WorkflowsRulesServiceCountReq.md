[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkflowsRulesServiceCountReq

# Class: WorkflowsRulesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.WorkflowsRulesServiceCountReq

## Hierarchy

- `Message`\<[`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md)\>

  ↳ **`WorkflowsRulesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](WorkflowsRulesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](WorkflowsRulesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](WorkflowsRulesServiceCountReq.md#approvedonend)
- [approvedOnStart](WorkflowsRulesServiceCountReq.md#approvedonstart)
- [approverRoleId](WorkflowsRulesServiceCountReq.md#approverroleid)
- [code](WorkflowsRulesServiceCountReq.md#code)
- [completedOnEnd](WorkflowsRulesServiceCountReq.md#completedonend)
- [completedOnStart](WorkflowsRulesServiceCountReq.md#completedonstart)
- [creationTimestampEnd](WorkflowsRulesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](WorkflowsRulesServiceCountReq.md#creationtimestampstart)
- [entityUuid](WorkflowsRulesServiceCountReq.md#entityuuid)
- [executeOn](WorkflowsRulesServiceCountReq.md#executeon)
- [isActive](WorkflowsRulesServiceCountReq.md#isactive)
- [modificationTimestampEnd](WorkflowsRulesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](WorkflowsRulesServiceCountReq.md#modificationtimestampstart)
- [moment](WorkflowsRulesServiceCountReq.md#moment)
- [name](WorkflowsRulesServiceCountReq.md#name)
- [notifyUserId](WorkflowsRulesServiceCountReq.md#notifyuserid)
- [recordStatus](WorkflowsRulesServiceCountReq.md#recordstatus)
- [serviceName](WorkflowsRulesServiceCountReq.md#servicename)
- [status](WorkflowsRulesServiceCountReq.md#status)
- [fields](WorkflowsRulesServiceCountReq.md#fields)
- [runtime](WorkflowsRulesServiceCountReq.md#runtime)
- [typeName](WorkflowsRulesServiceCountReq.md#typename)

### Methods

- [clone](WorkflowsRulesServiceCountReq.md#clone)
- [equals](WorkflowsRulesServiceCountReq.md#equals)
- [fromBinary](WorkflowsRulesServiceCountReq.md#frombinary)
- [fromJson](WorkflowsRulesServiceCountReq.md#fromjson)
- [fromJsonString](WorkflowsRulesServiceCountReq.md#fromjsonstring)
- [getType](WorkflowsRulesServiceCountReq.md#gettype)
- [toBinary](WorkflowsRulesServiceCountReq.md#tobinary)
- [toJSON](WorkflowsRulesServiceCountReq.md#tojson)
- [toJson](WorkflowsRulesServiceCountReq.md#tojson-1)
- [toJsonString](WorkflowsRulesServiceCountReq.md#tojsonstring)
- [equals](WorkflowsRulesServiceCountReq.md#equals-1)
- [fromBinary](WorkflowsRulesServiceCountReq.md#frombinary-1)
- [fromJson](WorkflowsRulesServiceCountReq.md#fromjson-1)
- [fromJsonString](WorkflowsRulesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkflowsRulesServiceCountReq**(`data?`): [`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md)\> |

#### Returns

[`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md)

#### Overrides

Message\&lt;WorkflowsRulesServiceCountReq\&gt;.constructor

#### Defined in

src/workflows_rules.scailo_pb.ts:1759

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/workflows_rules.scailo_pb.ts:1687

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/workflows_rules.scailo_pb.ts:1680

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/workflows_rules.scailo_pb.ts:1673

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/workflows_rules.scailo_pb.ts:1694

___

### code

• **code**: `string` = `""`

The code of the workflow rule

**`Generated`**

from field: string code = 21;

#### Defined in

src/workflows_rules.scailo_pb.ts:1722

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/workflows_rules.scailo_pb.ts:1708

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/workflows_rules.scailo_pb.ts:1701

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/workflows_rules.scailo_pb.ts:1638

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/workflows_rules.scailo_pb.ts:1631

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/workflows_rules.scailo_pb.ts:1659

___

### executeOn

• **executeOn**: [`WORKFLOW_RULE_EXECUTE_ON`](../enums/WORKFLOW_RULE_EXECUTE_ON.md) = `WORKFLOW_RULE_EXECUTE_ON.WORKFLOW_RULE_EXECUTE_ON_ANY_UNSPECIFIED`

Stores the value for when the rule should be triggered

**`Generated`**

from field: Scailo.WORKFLOW_RULE_EXECUTE_ON execute_on = 33;

#### Defined in

src/workflows_rules.scailo_pb.ts:1757

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/workflows_rules.scailo_pb.ts:1624

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/workflows_rules.scailo_pb.ts:1652

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/workflows_rules.scailo_pb.ts:1645

___

### moment

• **moment**: [`WORKFLOW_RULE_MOMENT`](../enums/WORKFLOW_RULE_MOMENT.md) = `WORKFLOW_RULE_MOMENT.WORKFLOW_RULE_MOMENT_ANY_UNSPECIFIED`

Stores the moment at which the rule should be triggered

**`Generated`**

from field: Scailo.WORKFLOW_RULE_MOMENT moment = 32;

#### Defined in

src/workflows_rules.scailo_pb.ts:1750

___

### name

• **name**: `string` = `""`

The name of the workflow rule

**`Generated`**

from field: string name = 20;

#### Defined in

src/workflows_rules.scailo_pb.ts:1715

___

### notifyUserId

• **notifyUserId**: `bigint` = `protoInt64.zero`

The ID of the user who is being notified

**`Generated`**

from field: uint64 notify_user_id = 22;

#### Defined in

src/workflows_rules.scailo_pb.ts:1729

___

### recordStatus

• **recordStatus**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Stores the status of the record. The rule is triggered when the status is reached.

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS record_status = 31;

#### Defined in

src/workflows_rules.scailo_pb.ts:1743

___

### serviceName

• **serviceName**: [`WORKFLOW_RULE_SERVICE_NAME`](../enums/WORKFLOW_RULE_SERVICE_NAME.md) = `WORKFLOW_RULE_SERVICE_NAME.WORKFLOW_RULE_SERVICE_NAME_ANY_UNSPECIFIED`

The name of the service for which this rule is applicable for

**`Generated`**

from field: Scailo.WORKFLOW_RULE_SERVICE_NAME service_name = 30;

#### Defined in

src/workflows_rules.scailo_pb.ts:1736

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this workflow rule

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/workflows_rules.scailo_pb.ts:1666

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/workflows_rules.scailo_pb.ts:1766

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/workflows_rules.scailo_pb.ts:1764

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkflowsRulesServiceCountReq"``

#### Defined in

src/workflows_rules.scailo_pb.ts:1765

## Methods

### clone

▸ **clone**(): [`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md)

Create a deep copy.

#### Returns

[`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md) \| `PlainMessage`\<[`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md) \| `PlainMessage`\<[`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md)\> |
| `b` | `undefined` \| [`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md) \| `PlainMessage`\<[`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/workflows_rules.scailo_pb.ts:1801

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md)

#### Defined in

src/workflows_rules.scailo_pb.ts:1789

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md)

#### Defined in

src/workflows_rules.scailo_pb.ts:1793

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkflowsRulesServiceCountReq`](WorkflowsRulesServiceCountReq.md)

#### Defined in

src/workflows_rules.scailo_pb.ts:1797
