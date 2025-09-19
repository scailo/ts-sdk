[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxParamsServiceCountReq

# Class: TaxParamsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.TaxParamsServiceCountReq

## Hierarchy

- `Message`\<[`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md)\>

  ↳ **`TaxParamsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](TaxParamsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](TaxParamsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](TaxParamsServiceCountReq.md#approvedonend)
- [approvedOnStart](TaxParamsServiceCountReq.md#approvedonstart)
- [approverRoleId](TaxParamsServiceCountReq.md#approverroleid)
- [category](TaxParamsServiceCountReq.md#category)
- [code](TaxParamsServiceCountReq.md#code)
- [creationTimestampEnd](TaxParamsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](TaxParamsServiceCountReq.md#creationtimestampstart)
- [entityUuid](TaxParamsServiceCountReq.md#entityuuid)
- [isActive](TaxParamsServiceCountReq.md#isactive)
- [modificationTimestampEnd](TaxParamsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](TaxParamsServiceCountReq.md#modificationtimestampstart)
- [name](TaxParamsServiceCountReq.md#name)
- [status](TaxParamsServiceCountReq.md#status)
- [valueType](TaxParamsServiceCountReq.md#valuetype)
- [fields](TaxParamsServiceCountReq.md#fields)
- [runtime](TaxParamsServiceCountReq.md#runtime)
- [typeName](TaxParamsServiceCountReq.md#typename)

### Methods

- [clone](TaxParamsServiceCountReq.md#clone)
- [equals](TaxParamsServiceCountReq.md#equals)
- [fromBinary](TaxParamsServiceCountReq.md#frombinary)
- [fromJson](TaxParamsServiceCountReq.md#fromjson)
- [fromJsonString](TaxParamsServiceCountReq.md#fromjsonstring)
- [getType](TaxParamsServiceCountReq.md#gettype)
- [toBinary](TaxParamsServiceCountReq.md#tobinary)
- [toJSON](TaxParamsServiceCountReq.md#tojson)
- [toJson](TaxParamsServiceCountReq.md#tojson-1)
- [toJsonString](TaxParamsServiceCountReq.md#tojsonstring)
- [equals](TaxParamsServiceCountReq.md#equals-1)
- [fromBinary](TaxParamsServiceCountReq.md#frombinary-1)
- [fromJson](TaxParamsServiceCountReq.md#fromjson-1)
- [fromJsonString](TaxParamsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxParamsServiceCountReq**(`data?`): [`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md)\> |

#### Returns

[`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md)

#### Overrides

Message\&lt;TaxParamsServiceCountReq\&gt;.constructor

#### Defined in

[src/tax_params.scailo_pb.ts:1033](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L1033)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/tax_params.scailo_pb.ts:996](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L996)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/tax_params.scailo_pb.ts:989](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L989)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/tax_params.scailo_pb.ts:982](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L982)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/tax_params.scailo_pb.ts:1003](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L1003)

___

### category

• **category**: [`TAX_PARAM_CATEGORY`](../enums/TAX_PARAM_CATEGORY.md) = `TAX_PARAM_CATEGORY.TAX_PARAM_CATEGORY_ANY_UNSPECIFIED`

The category of the tax param

**`Generated`**

from field: Scailo.TAX_PARAM_CATEGORY category = 32;

#### Defined in

[src/tax_params.scailo_pb.ts:1031](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L1031)

___

### code

• **code**: `string` = `""`

The unique code by which the tax param is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/tax_params.scailo_pb.ts:1017](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L1017)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/tax_params.scailo_pb.ts:947](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L947)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/tax_params.scailo_pb.ts:940](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L940)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/tax_params.scailo_pb.ts:968](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L968)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/tax_params.scailo_pb.ts:933](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L933)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/tax_params.scailo_pb.ts:961](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L961)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/tax_params.scailo_pb.ts:954](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L954)

___

### name

• **name**: `string` = `""`

The name of the tax param

**`Generated`**

from field: string name = 20;

#### Defined in

[src/tax_params.scailo_pb.ts:1010](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L1010)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this tax param

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/tax_params.scailo_pb.ts:975](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L975)

___

### valueType

• **valueType**: [`TAX_PARAM_VALUE_TYPE`](../enums/TAX_PARAM_VALUE_TYPE.md) = `TAX_PARAM_VALUE_TYPE.TAX_PARAM_VALUE_TYPE_ANY_UNSPECIFIED`

The type of the tax param

**`Generated`**

from field: Scailo.TAX_PARAM_VALUE_TYPE value_type = 31;

#### Defined in

[src/tax_params.scailo_pb.ts:1024](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L1024)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/tax_params.scailo_pb.ts:1040](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L1040)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/tax_params.scailo_pb.ts:1038](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L1038)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxParamsServiceCountReq"``

#### Defined in

[src/tax_params.scailo_pb.ts:1039](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L1039)

## Methods

### clone

▸ **clone**(): [`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md)

Create a deep copy.

#### Returns

[`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md) \| `PlainMessage`\<[`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md) \| `PlainMessage`\<[`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md)\> |
| `b` | `undefined` \| [`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md) \| `PlainMessage`\<[`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/tax_params.scailo_pb.ts:1070](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L1070)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md)

#### Defined in

[src/tax_params.scailo_pb.ts:1058](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L1058)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md)

#### Defined in

[src/tax_params.scailo_pb.ts:1062](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L1062)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxParamsServiceCountReq`](TaxParamsServiceCountReq.md)

#### Defined in

[src/tax_params.scailo_pb.ts:1066](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L1066)
