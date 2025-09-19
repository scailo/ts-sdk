[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkflowEvent

# Class: WorkflowEvent

Describes the request payload that is sent to Redis whenever an event occurs

**`Generated`**

from message Scailo.WorkflowEvent

## Hierarchy

- `Message`\<[`WorkflowEvent`](WorkflowEvent.md)\>

  ↳ **`WorkflowEvent`**

## Table of contents

### Constructors

- [constructor](WorkflowEvent.md#constructor)

### Properties

- [eventId](WorkflowEvent.md#eventid)
- [ruleCode](WorkflowEvent.md#rulecode)
- [serviceName](WorkflowEvent.md#servicename)
- [transactionPayload](WorkflowEvent.md#transactionpayload)
- [transactionStatus](WorkflowEvent.md#transactionstatus)
- [userPayload](WorkflowEvent.md#userpayload)
- [username](WorkflowEvent.md#username)
- [fields](WorkflowEvent.md#fields)
- [runtime](WorkflowEvent.md#runtime)
- [typeName](WorkflowEvent.md#typename)

### Methods

- [clone](WorkflowEvent.md#clone)
- [equals](WorkflowEvent.md#equals)
- [fromBinary](WorkflowEvent.md#frombinary)
- [fromJson](WorkflowEvent.md#fromjson)
- [fromJsonString](WorkflowEvent.md#fromjsonstring)
- [getType](WorkflowEvent.md#gettype)
- [toBinary](WorkflowEvent.md#tobinary)
- [toJSON](WorkflowEvent.md#tojson)
- [toJson](WorkflowEvent.md#tojson-1)
- [toJsonString](WorkflowEvent.md#tojsonstring)
- [equals](WorkflowEvent.md#equals-1)
- [fromBinary](WorkflowEvent.md#frombinary-1)
- [fromJson](WorkflowEvent.md#fromjson-1)
- [fromJsonString](WorkflowEvent.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkflowEvent**(`data?`): [`WorkflowEvent`](WorkflowEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkflowEvent`](WorkflowEvent.md)\> |

#### Returns

[`WorkflowEvent`](WorkflowEvent.md)

#### Overrides

Message\&lt;WorkflowEvent\&gt;.constructor

#### Defined in

[src/workflows_rules.scailo_pb.ts:1976](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1976)

## Properties

### eventId

• **eventId**: `bigint` = `protoInt64.zero`

The ID of the trigger that could be used to update the status of the trigger

**`Generated`**

from field: uint64 event_id = 1;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1932](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1932)

___

### ruleCode

• **ruleCode**: `string` = `""`

The code of the workflow rule

**`Generated`**

from field: string rule_code = 2;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1939](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1939)

___

### serviceName

• **serviceName**: [`WORKFLOW_RULE_SERVICE_NAME`](../enums/WORKFLOW_RULE_SERVICE_NAME.md) = `WORKFLOW_RULE_SERVICE_NAME.WORKFLOW_RULE_SERVICE_NAME_ANY_UNSPECIFIED`

The name of the service for which this rule is applicable for

**`Generated`**

from field: Scailo.WORKFLOW_RULE_SERVICE_NAME service_name = 10;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1946](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1946)

___

### transactionPayload

• **transactionPayload**: `Uint8Array`

The payload of the transaction that just took place (could be sales order, etc.)

**`Generated`**

from field: bytes transaction_payload = 30;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1960](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1960)

___

### transactionStatus

• **transactionStatus**: [`WORKFLOW_RULE_EXECUTE_ON`](../enums/WORKFLOW_RULE_EXECUTE_ON.md) = `WORKFLOW_RULE_EXECUTE_ON.WORKFLOW_RULE_EXECUTE_ON_ANY_UNSPECIFIED`

The status of the transaction

**`Generated`**

from field: Scailo.WORKFLOW_RULE_EXECUTE_ON transaction_status = 20;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1953](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1953)

___

### userPayload

• **userPayload**: `Uint8Array`

The configured static user payload of the workflow rule

**`Generated`**

from field: bytes user_payload = 40;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1967](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1967)

___

### username

• **username**: `string` = `""`

The username of the user who triggered the workflow

**`Generated`**

from field: string username = 50;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1974](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1974)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/workflows_rules.scailo_pb.ts:1983](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1983)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/workflows_rules.scailo_pb.ts:1981](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1981)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkflowEvent"``

#### Defined in

[src/workflows_rules.scailo_pb.ts:1982](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1982)

## Methods

### clone

▸ **clone**(): [`WorkflowEvent`](WorkflowEvent.md)

Create a deep copy.

#### Returns

[`WorkflowEvent`](WorkflowEvent.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkflowEvent`](WorkflowEvent.md) \| `PlainMessage`\<[`WorkflowEvent`](WorkflowEvent.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkflowEvent`](WorkflowEvent.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkflowEvent`](WorkflowEvent.md)\>

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
| `a` | `undefined` \| [`WorkflowEvent`](WorkflowEvent.md) \| `PlainMessage`\<[`WorkflowEvent`](WorkflowEvent.md)\> |
| `b` | `undefined` \| [`WorkflowEvent`](WorkflowEvent.md) \| `PlainMessage`\<[`WorkflowEvent`](WorkflowEvent.md)\> |

#### Returns

`boolean`

#### Defined in

[src/workflows_rules.scailo_pb.ts:2005](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L2005)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkflowEvent`](WorkflowEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkflowEvent`](WorkflowEvent.md)

#### Defined in

[src/workflows_rules.scailo_pb.ts:1993](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1993)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkflowEvent`](WorkflowEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkflowEvent`](WorkflowEvent.md)

#### Defined in

[src/workflows_rules.scailo_pb.ts:1997](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1997)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkflowEvent`](WorkflowEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkflowEvent`](WorkflowEvent.md)

#### Defined in

[src/workflows_rules.scailo_pb.ts:2001](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L2001)
