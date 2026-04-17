[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkflowsRulesServiceUpdateRequest

# Class: WorkflowsRulesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.WorkflowsRulesServiceUpdateRequest

## Hierarchy

- `Message`\<[`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md)\>

  ↳ **`WorkflowsRulesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](WorkflowsRulesServiceUpdateRequest.md#constructor)

### Properties

- [description](WorkflowsRulesServiceUpdateRequest.md#description)
- [executeOn](WorkflowsRulesServiceUpdateRequest.md#executeon)
- [id](WorkflowsRulesServiceUpdateRequest.md#id)
- [moment](WorkflowsRulesServiceUpdateRequest.md#moment)
- [name](WorkflowsRulesServiceUpdateRequest.md#name)
- [notifyUserId](WorkflowsRulesServiceUpdateRequest.md#notifyuserid)
- [notifyUsers](WorkflowsRulesServiceUpdateRequest.md#notifyusers)
- [recordStatus](WorkflowsRulesServiceUpdateRequest.md#recordstatus)
- [serviceName](WorkflowsRulesServiceUpdateRequest.md#servicename)
- [userComment](WorkflowsRulesServiceUpdateRequest.md#usercomment)
- [userPayload](WorkflowsRulesServiceUpdateRequest.md#userpayload)
- [vaultFolderId](WorkflowsRulesServiceUpdateRequest.md#vaultfolderid)
- [fields](WorkflowsRulesServiceUpdateRequest.md#fields)
- [runtime](WorkflowsRulesServiceUpdateRequest.md#runtime)
- [typeName](WorkflowsRulesServiceUpdateRequest.md#typename)

### Methods

- [clone](WorkflowsRulesServiceUpdateRequest.md#clone)
- [equals](WorkflowsRulesServiceUpdateRequest.md#equals)
- [fromBinary](WorkflowsRulesServiceUpdateRequest.md#frombinary)
- [fromJson](WorkflowsRulesServiceUpdateRequest.md#fromjson)
- [fromJsonString](WorkflowsRulesServiceUpdateRequest.md#fromjsonstring)
- [getType](WorkflowsRulesServiceUpdateRequest.md#gettype)
- [toBinary](WorkflowsRulesServiceUpdateRequest.md#tobinary)
- [toJSON](WorkflowsRulesServiceUpdateRequest.md#tojson)
- [toJson](WorkflowsRulesServiceUpdateRequest.md#tojson-1)
- [toJsonString](WorkflowsRulesServiceUpdateRequest.md#tojsonstring)
- [equals](WorkflowsRulesServiceUpdateRequest.md#equals-1)
- [fromBinary](WorkflowsRulesServiceUpdateRequest.md#frombinary-1)
- [fromJson](WorkflowsRulesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](WorkflowsRulesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkflowsRulesServiceUpdateRequest**(`data?`): [`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md)\> |

#### Returns

[`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md)

#### Overrides

Message\&lt;WorkflowsRulesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/workflows_rules.scailo_pb.ts:1043](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1043)

## Properties

### description

• **description**: `string` = `""`

The description of the workflow rule

**`Generated`**

from field: string description = 13;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1006](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1006)

___

### executeOn

• **executeOn**: [`WORKFLOW_RULE_EXECUTE_ON`](../enums/WORKFLOW_RULE_EXECUTE_ON.md) = `WORKFLOW_RULE_EXECUTE_ON.WORKFLOW_RULE_EXECUTE_ON_ANY_UNSPECIFIED`

Stores the value for when the rule should be triggered

**`Generated`**

from field: Scailo.WORKFLOW_RULE_EXECUTE_ON execute_on = 23;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1034](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1034)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/workflows_rules.scailo_pb.ts:957](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L957)

___

### moment

• **moment**: [`WORKFLOW_RULE_MOMENT`](../enums/WORKFLOW_RULE_MOMENT.md) = `WORKFLOW_RULE_MOMENT.WORKFLOW_RULE_MOMENT_ANY_UNSPECIFIED`

Stores the moment at which the rule should be triggered

**`Generated`**

from field: Scailo.WORKFLOW_RULE_MOMENT moment = 22;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1027](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1027)

___

### name

• **name**: `string` = `""`

The name of the workflow rule

**`Generated`**

from field: string name = 10;

#### Defined in

[src/workflows_rules.scailo_pb.ts:992](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L992)

___

### notifyUserId

• **notifyUserId**: `bigint` = `protoInt64.zero`

The ID of the user who is to be notified when this rule is triggered. The notification will most likely be in the form of an email.

**`Generated`**

from field: uint64 notify_user_id = 12;

#### Defined in

[src/workflows_rules.scailo_pb.ts:999](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L999)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/workflows_rules.scailo_pb.ts:969](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L969)

___

### recordStatus

• **recordStatus**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Stores the status of the record. The rule is triggered when the status is reached.

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS record_status = 21;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1020](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1020)

___

### serviceName

• **serviceName**: [`WORKFLOW_RULE_SERVICE_NAME`](../enums/WORKFLOW_RULE_SERVICE_NAME.md) = `WORKFLOW_RULE_SERVICE_NAME.WORKFLOW_RULE_SERVICE_NAME_ANY_UNSPECIFIED`

The name of the service for which this rule is applicable for

**`Generated`**

from field: Scailo.WORKFLOW_RULE_SERVICE_NAME service_name = 20;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1013](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1013)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/workflows_rules.scailo_pb.ts:950](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L950)

___

### userPayload

• **userPayload**: `Uint8Array`

Stores any additional static payload that is provided by the user and needs to be relayed in the rule

**`Generated`**

from field: bytes user_payload = 40;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1041](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1041)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/workflows_rules.scailo_pb.ts:985](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L985)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/workflows_rules.scailo_pb.ts:1050](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1050)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/workflows_rules.scailo_pb.ts:1048](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1048)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkflowsRulesServiceUpdateRequest"``

#### Defined in

[src/workflows_rules.scailo_pb.ts:1049](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1049)

## Methods

### clone

▸ **clone**(): [`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md) \| `PlainMessage`\<[`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md) \| `PlainMessage`\<[`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md) \| `PlainMessage`\<[`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/workflows_rules.scailo_pb.ts:1077](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1077)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md)

#### Defined in

[src/workflows_rules.scailo_pb.ts:1065](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1065)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md)

#### Defined in

[src/workflows_rules.scailo_pb.ts:1069](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1069)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkflowsRulesServiceUpdateRequest`](WorkflowsRulesServiceUpdateRequest.md)

#### Defined in

[src/workflows_rules.scailo_pb.ts:1073](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/workflows_rules.scailo_pb.ts#L1073)
