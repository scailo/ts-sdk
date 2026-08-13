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

[src/workflows_rules.scailo_pb.ts:2172](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2172)

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

[src/workflows_rules.scailo_pb.ts:2073](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2073)

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

[src/workflows_rules.scailo_pb.ts:2057](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2057)

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

[src/workflows_rules.scailo_pb.ts:2041](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2041)

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

[src/workflows_rules.scailo_pb.ts:2089](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2089)

___

### code

• **code**: `string` = `""`

The code of the workflow rule

**`Generated`**

from field: string code = 21;

#### Defined in

[src/workflows_rules.scailo_pb.ts:2135](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2135)

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

[src/workflows_rules.scailo_pb.ts:2121](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2121)

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

[src/workflows_rules.scailo_pb.ts:2105](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2105)

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

[src/workflows_rules.scailo_pb.ts:1965](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L1965)

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

[src/workflows_rules.scailo_pb.ts:1949](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L1949)

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

[src/workflows_rules.scailo_pb.ts:2013](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2013)

___

### executeOn

• **executeOn**: [`WORKFLOW_RULE_EXECUTE_ON`](../enums/WORKFLOW_RULE_EXECUTE_ON.md) = `WORKFLOW_RULE_EXECUTE_ON.WORKFLOW_RULE_EXECUTE_ON_ANY_UNSPECIFIED`

Stores the value for when the rule should be triggered

**`Generated`**

from field: Scailo.WORKFLOW_RULE_EXECUTE_ON execute_on = 33;

#### Defined in

[src/workflows_rules.scailo_pb.ts:2170](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2170)

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

[src/workflows_rules.scailo_pb.ts:1933](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L1933)

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

[src/workflows_rules.scailo_pb.ts:1997](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L1997)

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

[src/workflows_rules.scailo_pb.ts:1981](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L1981)

___

### moment

• **moment**: [`WORKFLOW_RULE_MOMENT`](../enums/WORKFLOW_RULE_MOMENT.md) = `WORKFLOW_RULE_MOMENT.WORKFLOW_RULE_MOMENT_ANY_UNSPECIFIED`

Stores the moment at which the rule should be triggered

**`Generated`**

from field: Scailo.WORKFLOW_RULE_MOMENT moment = 32;

#### Defined in

[src/workflows_rules.scailo_pb.ts:2163](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2163)

___

### name

• **name**: `string` = `""`

The name of the workflow rule

**`Generated`**

from field: string name = 20;

#### Defined in

[src/workflows_rules.scailo_pb.ts:2128](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2128)

___

### notifyUserId

• **notifyUserId**: `bigint` = `protoInt64.zero`

The ID of the user who is being notified

**`Generated`**

from field: uint64 notify_user_id = 22;

#### Defined in

[src/workflows_rules.scailo_pb.ts:2142](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2142)

___

### recordStatus

• **recordStatus**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Stores the status of the record. The rule is triggered when the status is reached.

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS record_status = 31;

#### Defined in

[src/workflows_rules.scailo_pb.ts:2156](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2156)

___

### serviceName

• **serviceName**: [`WORKFLOW_RULE_SERVICE_NAME`](../enums/WORKFLOW_RULE_SERVICE_NAME.md) = `WORKFLOW_RULE_SERVICE_NAME.WORKFLOW_RULE_SERVICE_NAME_ANY_UNSPECIFIED`

The name of the service for which this rule is applicable for

**`Generated`**

from field: Scailo.WORKFLOW_RULE_SERVICE_NAME service_name = 30;

#### Defined in

[src/workflows_rules.scailo_pb.ts:2149](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2149)

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

[src/workflows_rules.scailo_pb.ts:2025](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2025)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/workflows_rules.scailo_pb.ts:2179](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2179)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/workflows_rules.scailo_pb.ts:2177](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2177)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkflowsRulesServiceCountReq"``

#### Defined in

[src/workflows_rules.scailo_pb.ts:2178](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2178)

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

[src/workflows_rules.scailo_pb.ts:2214](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2214)

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

[src/workflows_rules.scailo_pb.ts:2202](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2202)

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

[src/workflows_rules.scailo_pb.ts:2206](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2206)

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

[src/workflows_rules.scailo_pb.ts:2210](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/workflows_rules.scailo_pb.ts#L2210)
