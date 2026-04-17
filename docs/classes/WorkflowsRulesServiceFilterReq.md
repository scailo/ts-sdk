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

[src/workflows_rules.scailo_pb.ts:1798](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1798)

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

[src/workflows_rules.scailo_pb.ts:1699](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1699)

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

[src/workflows_rules.scailo_pb.ts:1683](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1683)

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

[src/workflows_rules.scailo_pb.ts:1667](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1667)

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

[src/workflows_rules.scailo_pb.ts:1715](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1715)

___

### code

• **code**: `string` = `""`

The code of the workflow rule

**`Generated`**

from field: string code = 21;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1761](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1761)

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

[src/workflows_rules.scailo_pb.ts:1747](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1747)

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

[src/workflows_rules.scailo_pb.ts:1731](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1731)

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

[src/workflows_rules.scailo_pb.ts:1521](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1521)

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

[src/workflows_rules.scailo_pb.ts:1591](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1591)

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

[src/workflows_rules.scailo_pb.ts:1575](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1575)

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

[src/workflows_rules.scailo_pb.ts:1639](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1639)

___

### executeOn

• **executeOn**: [`WORKFLOW_RULE_EXECUTE_ON`](../enums/WORKFLOW_RULE_EXECUTE_ON.md) = `WORKFLOW_RULE_EXECUTE_ON.WORKFLOW_RULE_EXECUTE_ON_ANY_UNSPECIFIED`

Stores the value for when the rule should be triggered

**`Generated`**

from field: Scailo.WORKFLOW_RULE_EXECUTE_ON execute_on = 33;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1796](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1796)

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

[src/workflows_rules.scailo_pb.ts:1505](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1505)

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

[src/workflows_rules.scailo_pb.ts:1623](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1623)

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

[src/workflows_rules.scailo_pb.ts:1607](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1607)

___

### moment

• **moment**: [`WORKFLOW_RULE_MOMENT`](../enums/WORKFLOW_RULE_MOMENT.md) = `WORKFLOW_RULE_MOMENT.WORKFLOW_RULE_MOMENT_ANY_UNSPECIFIED`

Stores the moment at which the rule should be triggered

**`Generated`**

from field: Scailo.WORKFLOW_RULE_MOMENT moment = 32;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1789](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1789)

___

### name

• **name**: `string` = `""`

The name of the workflow rule

**`Generated`**

from field: string name = 20;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1754](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1754)

___

### notifyUserId

• **notifyUserId**: `bigint` = `protoInt64.zero`

The ID of the user who is being notified

**`Generated`**

from field: uint64 notify_user_id = 22;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1768](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1768)

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

[src/workflows_rules.scailo_pb.ts:1537](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1537)

___

### recordStatus

• **recordStatus**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Stores the status of the record. The rule is triggered when the status is reached.

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS record_status = 31;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1782](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1782)

___

### serviceName

• **serviceName**: [`WORKFLOW_RULE_SERVICE_NAME`](../enums/WORKFLOW_RULE_SERVICE_NAME.md) = `WORKFLOW_RULE_SERVICE_NAME.WORKFLOW_RULE_SERVICE_NAME_ANY_UNSPECIFIED`

The name of the service for which this rule is applicable for

**`Generated`**

from field: Scailo.WORKFLOW_RULE_SERVICE_NAME service_name = 30;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1775](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1775)

___

### sortKey

• **sortKey**: [`WORKFLOW_RULE_SORT_KEY`](../enums/WORKFLOW_RULE_SORT_KEY.md) = `WORKFLOW_RULE_SORT_KEY.WORKFLOW_RULE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.WORKFLOW_RULE_SORT_KEY sort_key = 5;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1559](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1559)

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

[src/workflows_rules.scailo_pb.ts:1549](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1549)

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

[src/workflows_rules.scailo_pb.ts:1651](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1651)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/workflows_rules.scailo_pb.ts:1805](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1805)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/workflows_rules.scailo_pb.ts:1803](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1803)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkflowsRulesServiceFilterReq"``

#### Defined in

[src/workflows_rules.scailo_pb.ts:1804](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1804)

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

[src/workflows_rules.scailo_pb.ts:1844](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1844)

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

[src/workflows_rules.scailo_pb.ts:1832](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1832)

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

[src/workflows_rules.scailo_pb.ts:1836](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1836)

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

[src/workflows_rules.scailo_pb.ts:1840](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1840)
