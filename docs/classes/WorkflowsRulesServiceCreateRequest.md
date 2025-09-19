[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkflowsRulesServiceCreateRequest

# Class: WorkflowsRulesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.WorkflowsRulesServiceCreateRequest

## Hierarchy

- `Message`\<[`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md)\>

  ↳ **`WorkflowsRulesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](WorkflowsRulesServiceCreateRequest.md#constructor)

### Properties

- [description](WorkflowsRulesServiceCreateRequest.md#description)
- [entityUuid](WorkflowsRulesServiceCreateRequest.md#entityuuid)
- [executeOn](WorkflowsRulesServiceCreateRequest.md#executeon)
- [moment](WorkflowsRulesServiceCreateRequest.md#moment)
- [name](WorkflowsRulesServiceCreateRequest.md#name)
- [notifyUserId](WorkflowsRulesServiceCreateRequest.md#notifyuserid)
- [recordStatus](WorkflowsRulesServiceCreateRequest.md#recordstatus)
- [serviceName](WorkflowsRulesServiceCreateRequest.md#servicename)
- [userComment](WorkflowsRulesServiceCreateRequest.md#usercomment)
- [userPayload](WorkflowsRulesServiceCreateRequest.md#userpayload)
- [vaultFolderId](WorkflowsRulesServiceCreateRequest.md#vaultfolderid)
- [fields](WorkflowsRulesServiceCreateRequest.md#fields)
- [runtime](WorkflowsRulesServiceCreateRequest.md#runtime)
- [typeName](WorkflowsRulesServiceCreateRequest.md#typename)

### Methods

- [clone](WorkflowsRulesServiceCreateRequest.md#clone)
- [equals](WorkflowsRulesServiceCreateRequest.md#equals)
- [fromBinary](WorkflowsRulesServiceCreateRequest.md#frombinary)
- [fromJson](WorkflowsRulesServiceCreateRequest.md#fromjson)
- [fromJsonString](WorkflowsRulesServiceCreateRequest.md#fromjsonstring)
- [getType](WorkflowsRulesServiceCreateRequest.md#gettype)
- [toBinary](WorkflowsRulesServiceCreateRequest.md#tobinary)
- [toJSON](WorkflowsRulesServiceCreateRequest.md#tojson)
- [toJson](WorkflowsRulesServiceCreateRequest.md#tojson-1)
- [toJsonString](WorkflowsRulesServiceCreateRequest.md#tojsonstring)
- [equals](WorkflowsRulesServiceCreateRequest.md#equals-1)
- [fromBinary](WorkflowsRulesServiceCreateRequest.md#frombinary-1)
- [fromJson](WorkflowsRulesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](WorkflowsRulesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkflowsRulesServiceCreateRequest**(`data?`): [`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md)\> |

#### Returns

[`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md)

#### Overrides

Message\&lt;WorkflowsRulesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/workflows_rules.scailo_pb.ts:882](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L882)

## Properties

### description

• **description**: `string` = `""`

The description of the workflow rule

**`Generated`**

from field: string description = 13;

#### Defined in

[src/workflows_rules.scailo_pb.ts:845](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L845)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/workflows_rules.scailo_pb.ts:810](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L810)

___

### executeOn

• **executeOn**: [`WORKFLOW_RULE_EXECUTE_ON`](../enums/WORKFLOW_RULE_EXECUTE_ON.md) = `WORKFLOW_RULE_EXECUTE_ON.WORKFLOW_RULE_EXECUTE_ON_ANY_UNSPECIFIED`

Stores the value for when the rule should be triggered

**`Generated`**

from field: Scailo.WORKFLOW_RULE_EXECUTE_ON execute_on = 23;

#### Defined in

[src/workflows_rules.scailo_pb.ts:873](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L873)

___

### moment

• **moment**: [`WORKFLOW_RULE_MOMENT`](../enums/WORKFLOW_RULE_MOMENT.md) = `WORKFLOW_RULE_MOMENT.WORKFLOW_RULE_MOMENT_ANY_UNSPECIFIED`

Stores the moment at which the rule should be triggered

**`Generated`**

from field: Scailo.WORKFLOW_RULE_MOMENT moment = 22;

#### Defined in

[src/workflows_rules.scailo_pb.ts:866](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L866)

___

### name

• **name**: `string` = `""`

The name of the workflow rule

**`Generated`**

from field: string name = 10;

#### Defined in

[src/workflows_rules.scailo_pb.ts:831](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L831)

___

### notifyUserId

• **notifyUserId**: `bigint` = `protoInt64.zero`

The ID of the user who is to be notified when this rule is triggered. The notification will most likely be in the form of an email.

**`Generated`**

from field: uint64 notify_user_id = 12;

#### Defined in

[src/workflows_rules.scailo_pb.ts:838](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L838)

___

### recordStatus

• **recordStatus**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Stores the status of the record. The rule is triggered when the status is reached.

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS record_status = 21;

#### Defined in

[src/workflows_rules.scailo_pb.ts:859](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L859)

___

### serviceName

• **serviceName**: [`WORKFLOW_RULE_SERVICE_NAME`](../enums/WORKFLOW_RULE_SERVICE_NAME.md) = `WORKFLOW_RULE_SERVICE_NAME.WORKFLOW_RULE_SERVICE_NAME_ANY_UNSPECIFIED`

The name of the service for which this rule is applicable for

**`Generated`**

from field: Scailo.WORKFLOW_RULE_SERVICE_NAME service_name = 20;

#### Defined in

[src/workflows_rules.scailo_pb.ts:852](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L852)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/workflows_rules.scailo_pb.ts:817](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L817)

___

### userPayload

• **userPayload**: `Uint8Array`

Stores any additional static payload that is provided by the user and needs to be relayed in the rule

**`Generated`**

from field: bytes user_payload = 40;

#### Defined in

[src/workflows_rules.scailo_pb.ts:880](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L880)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/workflows_rules.scailo_pb.ts:824](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L824)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/workflows_rules.scailo_pb.ts:889](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L889)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/workflows_rules.scailo_pb.ts:887](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L887)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkflowsRulesServiceCreateRequest"``

#### Defined in

[src/workflows_rules.scailo_pb.ts:888](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L888)

## Methods

### clone

▸ **clone**(): [`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md) \| `PlainMessage`\<[`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md) \| `PlainMessage`\<[`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md) \| `PlainMessage`\<[`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/workflows_rules.scailo_pb.ts:915](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L915)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md)

#### Defined in

[src/workflows_rules.scailo_pb.ts:903](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L903)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md)

#### Defined in

[src/workflows_rules.scailo_pb.ts:907](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L907)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkflowsRulesServiceCreateRequest`](WorkflowsRulesServiceCreateRequest.md)

#### Defined in

[src/workflows_rules.scailo_pb.ts:911](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L911)
